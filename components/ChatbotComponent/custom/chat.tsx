"use client";

import { Attachment, Message } from "ai";
import { useChat } from "@ai-sdk/react";
import { useEffect, useState } from "react";

import { Message as PreviewMessage } from "./message";
import { useScrollToBottom } from "./use-scroll-to-bottom";

import { MultimodalInput } from "./multimodal-input";
import { Overview } from "./overview";

export function Chat({
                         id,
                         initialMessages,
                     }: {
    id: string;
    initialMessages: Array<Message>;
}) {
    const { messages, handleSubmit, input, setInput, append, isLoading, stop } =
        useChat({
            id,
            body: { id },
            initialMessages,
            maxSteps: 100
        });

    useEffect(() => {
        console.log("messages......", messages);
    }, [messages]);

    const [messagesContainerRef, messagesEndRef] =
        useScrollToBottom<HTMLDivElement>();

    const [attachments, setAttachments] = useState<Array<Attachment>>([]);

    return (
        <div className="flex flex-row justify-center pb-4 md:pb-8 h-dvh bg-background">
            <div className="flex flex-col max-h-[600px] justify-between w-full items-center gap-4">
                <div ref={messagesContainerRef as any}
                     className="flex flex-col gap-4  w-full items-center overflow-y-scroll"
                >
                    {messages.length === 0 && <Overview />}
                    {messages
                        .filter((message) => {
                            // Always show user messages
                            if (message.role === "user") return true;

                            // Hide assistant messages that only contain tool calls
                            if (
                                message.role === "assistant" &&
                                (!message.content || message.content.trim() === "") &&
                                message.toolInvocations?.length
                            ) {
                                return false;
                            }

                            return true;
                        })
                        .map((message) => (
                            <PreviewMessage
                                key={message.id}
                                chatId={id}
                                role={message.role}
                                content={message.content}
                                attachments={message.experimental_attachments}
                                toolInvocations={message.toolInvocations}
                            />
                        ))}

                    <div ref={messagesEndRef as any}
                         className="shrink-0 min-w-[24px] min-h-[24px]"
                    />
                </div>

                <form className="flex flex-row gap-2 relative items-end w-full md:max-w-[500px] max-w-[calc(100dvw-32px) px-4 md:px-0">
                    <MultimodalInput
                        input={input}
                        setInput={setInput}
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}
                        stop={stop}
                        attachments={attachments}
                        setAttachments={setAttachments}
                        messages={messages}
                        append={append}
                    />
                </form>
            </div>
        </div>
    );
}