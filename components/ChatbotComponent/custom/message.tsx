"use client";

import { motion } from "framer-motion";
import { Streamdown } from "streamdown";
import { BotIcon, UserIcon } from "./icons";
import { PreviewAttachment } from "./preview-attachment";
import type { Attachment, ToolInvocation } from "ai";
import type { ReactNode } from "react";

export const Message = ({
                            chatId,
                            role,
                            content,
                            toolInvocations,
                            attachments,
                        }: {
    chatId: string;
    role: string;
    content: string | ReactNode;
    toolInvocations: Array<ToolInvocation> | undefined;
    attachments?: Array<Attachment>;
}) => {
    const isUser = role === "user";

    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`relative flex w-full items-start gap-4 px-6 py-5 md:px-12 ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >
            {/* Assistant Avatar */}
            {!isUser && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                    <BotIcon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </div>
            )}

            {/* Message Body */}
            <div className="flex max-w-3xl flex-col gap-2">
                <div
                    className={`rounded-xl border px-5 py-4 text-[15px] leading-relaxed shadow-sm
            ${
                        isUser
                            ? "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"
                            : "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"
                    }`}
                >
                    {/* Content */}
                    {content && (
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            {typeof content === "string" ? (
                                <Streamdown className="streamdown-modern">
                                    {content}
                                </Streamdown>
                            ) : (
                                content
                            )}
                        </div>
                    )}

                    {/* Attachments */}
                    {attachments?.length ? (
                        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {attachments.map((attachment) => (
                                <PreviewAttachment
                                    key={attachment.url}
                                    attachment={attachment}
                                    className="rounded-lg border border-zinc-200 shadow-sm dark:border-zinc-700"
                                />
                            ))}
                        </div>
                    ) : null}

                    {/* Tools */}
                    {toolInvocations?.length ? (
                        <div className="mt-4 space-y-2">
                            {/* ToolResultCard goes here */}
                        </div>
                    ) : null}
                </div>

                {/* Metadata */}
                <div
                    className={`text-xs text-zinc-500 ${
                        isUser ? "text-right" : "text-left"
                    }`}
                >
                    {isUser ? "You" : "Assistant"} · Just now
                </div>
            </div>

            {/* User Avatar */}
            {isUser && (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                    <UserIcon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </div>
            )}
        </motion.div>
    );
}
