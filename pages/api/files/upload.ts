import type { NextApiRequest, NextApiResponse } from "next";
import { put } from "@vercel/blob";
import { z } from "zod";
import formidable from "formidable";
import fs from "fs";

// Disable default body parsing (important for file uploads)
export const config = {
  api: {
    bodyParser: false,
  },
};

const FileSchema = z.object({
  file: z
    .object({
      size: z.number().max(5 * 1024 * 1024),
      mimetype: z.enum(["image/jpeg", "image/png", "application/pdf"]),
    })
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: false });


  try {
    const { files } = await new Promise<any>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    const file = files.file?.[0];

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const validation = FileSchema.safeParse({
      file: {
        size: file.size,
        mimetype: file.mimetype,
      },
    });

    if (!validation.success) {
      return res
        .status(400)
        .json({ error: validation.error.errors.map(e => e.message).join(", ") });
    }

    const buffer = await fs.promises.readFile(file.filepath);

    const blob = await put(file.originalFilename!, buffer, {
      access: "public",
    });

    return res.status(200).json(blob);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Upload failed" });
  }
}