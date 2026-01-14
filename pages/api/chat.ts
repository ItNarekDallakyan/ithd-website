import type { NextApiRequest, NextApiResponse } from "next";
import { convertToCoreMessages, generateId, Message, streamText } from "ai";
import { z } from "zod";

import { geminiProModel } from "@ai/index";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { messages }: { messages: Message[] } = req.body;

//   let enhancedMessages = [...messages];

//   // 1️⃣ Detect image / PDF upload
//   const lastMessage = messages[messages.length - 1];
//   const attachment = lastMessage.experimental_attachments?.find(
//     (a) =>
//       a.contentType?.startsWith("image") ||
//       a.contentType === "application/pdf"
//   );

//   // 2️⃣ Run OCR BEFORE calling the model
//   if (attachment?.url) {
//     const ocrText = await performOCR(attachment.url);

//     enhancedMessages.push({
//       id: generateId(),
//       role: "user",
//       content: ocrText || "No text detected in the uploaded file."
//     });
//   }

//   // 3️⃣ Convert to core messages
//   const coreMessages = convertToCoreMessages(enhancedMessages).filter(
//     (m) => m.content && m.content.length > 0
//   );

//   console.log("coreMessages......", JSON.stringify(coreMessages, null, 2))

//   // 4️⃣ Call the model (TEXT ONLY)
//   const result = await streamText({
//     model: geminiProModel,
//     maxSteps: 1,
//     system: `
//       You are a Smart Dibba Municipality assistant.
//       OCR text has already been extracted from the uploaded image or PDF.
//       Do NOT summarize or explain anything.
//       Respond in the same language as the user (English or Arabic).
//     `,
//     messages: coreMessages,
//   });

//   res.setHeader("Content-Type", "text/event-stream");
//   return result.pipeDataStreamToResponse(res);
// }


// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { messages }: { messages: Message[] } = req.body;
//   const lastMessage = messages[messages.length - 1];

//   // 1️⃣ Check if the last message has an image or PDF
//   const attachment = lastMessage.experimental_attachments?.find(
//     (a) =>
//       a.contentType?.startsWith("image") ||
//       a.contentType === "application/pdf"
//   );

//   console.log("attachment?.url......", attachment?.url)

//   if (attachment?.url) {
//     // 2️⃣ OCR flow (image/pdf)
//     const ocrText = await performOCR(attachment.url);
//     // const ocrText = "Test";

//     console.log("ocrText......", ocrText)

//     const ocrMessage = {
//       id: generateId(),
//       role: "assistant",
//       content: ocrText || "No text detected in the uploaded file.",
//       createdAt: new Date().toISOString(),
//     };  

//     res.setHeader('Content-Type', 'text/event-stream');
//     res.setHeader('Cache-Control', 'no-cache');
//     res.setHeader('Connection', 'keep-alive');

//     // SSE format requires this structure
//     const sseData = [
//       `id: ${ocrMessage.id}`,
//       `event: message`,
//       `data: ${JSON.stringify(ocrMessage)}`,
//       '\n' // End with double newline
//     ].join('\n');

//     // Write using proper chunked encoding
//     res.write(sseData);

//     // Add empty final chunk to complete SSE
//     res.write('\n\n');
//     res.end();

//     // Ensure Node.js doesn't buffer the response
//     res.flushHeaders();

//     // Add error handling
//     req.on('close', () => {
//       res.end();
//     });

//     return;
//   }

//   // 3️⃣ Text flow (only user text) → use Gemini
//   const coreMessages = convertToCoreMessages(messages).filter(
//     (m) => m.content && m.content.length > 0
//   );

//   const result = await streamText({
//     model: geminiProModel,
//     maxSteps: 1,
//     system: `
//       You are a Smart Dibba Municipality assistant.
//       Users may upload images or pdf files, but OCR is already handled.
//       Do NOT summarize or explain anything.
//       Respond in the same language as the user (English or Arabic).
//     `,
//     messages: coreMessages,
//   });

//   res.setHeader("Content-Type", "text/event-stream");
//   return result.pipeDataStreamToResponse(res);
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages }: { messages: Message[] } = req.body;
  const lastMessage = messages[messages.length - 1];

  // 1️⃣ Detect image / PDF
  const attachment = lastMessage.experimental_attachments?.find(
    (a) =>
      a.contentType?.startsWith("image") ||
      a.contentType === "application/pdf"
  );

  let enhancedMessages = [...messages];

  if (attachment?.url) {
    // 2️⃣ Run OCR first
    const ocrText = await performOCR(attachment.url);

    // 3️⃣ Add OCR text as a user message before sending to streamText
    enhancedMessages.push({
      id: generateId(),
      role: "user",
      content: "OCR Text:" + ocrText || "No text detected in the uploaded file.",
      createdAt: new Date(),
    });
  }

  // 4️⃣ Convert messages to core format
  const coreMessages = convertToCoreMessages(enhancedMessages).filter(
    (m) => m.content && m.content.length > 0
  );

  console.log("coreMessages......", JSON.stringify(coreMessages, null, 2));

  // 5️⃣ Call streamText for both OCR or text
  const result = await streamText({
    model: geminiProModel,
    maxSteps: 1,
    system: `
      You are a Smart Dibba Municipality assistant.
      OCR text has already been extracted if an image or PDF was uploaded.
      Do NOT summarize or explain anything.
      Respond the OCR text in the same language as the user (English or Arabic).
    `,
    messages: coreMessages,
  });

  // 6️⃣ Stream via SSE
  res.setHeader("Content-Type", "text/event-stream");
  // res.setHeader("Cache-Control", "no-cache");
  // res.setHeader("Connection", "keep-alive");

  return result.pipeDataStreamToResponse(res);
}

const performOCR = async (imageUrl: string) => {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error("Failed to fetch image");
  const API_KEY = "AIzaSyBP3pc-95hf4DzDsD3jxquW1I2TlxHnpCY";

  const buffer = Buffer.from(await res.arrayBuffer());
  const base64 = buffer.toString("base64");

  const isPdf = imageUrl.endsWith(".pdf");

  const endpoint = isPdf
    ? `https://vision.googleapis.com/v1/files:annotate?key=${API_KEY}`
    : `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

  console.log("endpoint......", endpoint)

  const payload = isPdf
    ? {
        requests: [{
          inputConfig: {
            content: base64,
            mimeType: "application/pdf"
          },
          features: [{ type: "DOCUMENT_TEXT_DETECTION" }],
          pages: [1, 2, 3, 4, 5]
        }]
      }
    : {
        requests: [{
          image: { content: base64 },
          features: [{ type: "DOCUMENT_TEXT_DETECTION" }]
        }]
    };

  const visionRes = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await visionRes.json();

  console.log("data.......", data)

  if (isPdf) {
    return (data.responses?.[0]?.responses || [])
      .map((p: any) => p.fullTextAnnotation?.text)
      .filter(Boolean)
      .join("\n\n─────\n\n");
  }

  const extractedText = data.responses?.[0]?.fullTextAnnotation?.text || "";

  console.log("extractedText......", extractedText)

  return extractedText;
};