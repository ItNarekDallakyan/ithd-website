"use client";

import { Attachment, ChatRequestOptions, CreateMessage, Message } from "ai";
import { motion } from "framer-motion";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";

import { ArrowUpIcon, PaperclipIcon, StopIcon } from "./icons";
import { PreviewAttachment } from "./preview-attachment";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import useWindowSize from "./use-window-size";

interface MultimodalInputProps {
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  stop: () => void;
  attachments: Attachment[];
  setAttachments: Dispatch<SetStateAction<Attachment[]>>;
  messages: Message[];
  append: (
      message: Message | CreateMessage,
      chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;
  handleSubmit: (
      event?: { preventDefault?: () => void },
      chatRequestOptions?: ChatRequestOptions,
  ) => void;
}

export function MultimodalInput({
                                  input,
                                  setInput,
                                  isLoading,
                                  stop,
                                  attachments,
                                  setAttachments,
                                  messages,
                                  append,
                                  handleSubmit,
                                }: MultimodalInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { width } = useWindowSize();

  const [uploadQueue, setUploadQueue] = useState<string[]>([]);

  // Auto-resize textarea
  const adjustTextareaHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, []);

  useEffect(() => {
    adjustTextareaHeight();
  }, [input, adjustTextareaHeight]);

  const handleFileUpload = async (file: File): Promise<Attachment | null> => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/files/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || "Upload failed");
      }

      const { url, pathname, contentType } = await response.json();
      return { url, name: pathname, contentType };
    } catch (err) {
      toast.error(`Failed to upload ${file.name}`);
      console.error("File upload error:", err);
      return null;
    }
  };

  const handleFilesSelected = useCallback(
      async (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []);
        if (files.length === 0) return;

        const filenames = files.map((f) => f.name);
        setUploadQueue((prev) => [...prev, ...filenames]);

        try {
          const uploadResults = await Promise.allSettled(
              files.map(handleFileUpload),
          );

          const successfulUploads = uploadResults
              .filter(
                  (result): result is PromiseFulfilledResult<Attachment | null> =>
                      result.status === "fulfilled" && result.value !== null,
              )
              .map((result) => result.value!);

          if (successfulUploads.length > 0) {
            setAttachments((prev) => [...prev, ...successfulUploads]);
          }
        } finally {
          setUploadQueue([]);
          if (e.target) e.target.value = ""; // reset input
        }
      },
      [setAttachments],
  );

  const submitMessage = useCallback(() => {
    const trimmedInput = input.trim();
    const finalContent = trimmedInput === "" && attachments.length > 0 ? " " : trimmedInput;

    handleSubmit(undefined, {
      experimental_attachments: attachments,
      body: { content: finalContent },
      allowEmptySubmit: true,
    });

    setAttachments([]);
    setInput("");

    // Refocus on desktop
    if (width && width > 768) {
      textareaRef.current?.focus();
    }
  }, [input, attachments, handleSubmit, setAttachments, setInput, width]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (isLoading) {
        toast.error("Please wait for the current response to complete");
        return;
      }

      if (input.trim() === "" && attachments.length === 0) {
        toast.warning("Please type a message or attach a file");
        return;
      }

      submitMessage();
    }
  };

  const hasContent = input.trim().length > 0 || attachments.length > 0;

  return (
      <div className="relative w-full flex flex-col gap-3 pb-2">
        {/* Hidden file input */}
        <input
            type="file"
            ref={fileInputRef}
            multiple
            className="sr-only"
            onChange={handleFilesSelected}
            tabIndex={-1}
            aria-hidden="true"
        />

        {/* Attachments preview */}
        {(attachments.length > 0 || uploadQueue.length > 0) && (
            <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-thin">
              {attachments.map((att) => (
                  <PreviewAttachment key={att.url} attachment={att} />
              ))}
              {uploadQueue.map((name) => (
                  <PreviewAttachment
                      key={name}
                      attachment={{ url: "", name, contentType: "" }}
                      isUploading
                  />
              ))}
            </div>
        )}

        <div className="relative">
          <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                adjustTextareaHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder={isLoading ? "Thinking..." : "Type a message..."}
              disabled={isLoading}
              rows={1}
              className="min-h-[52px] max-h-[180px] resize-none pr-24 py-3 text-base rounded-xl bg-muted/70 border border-border/60 focus:border-primary/50 transition-colors"
          />

          {/* Action buttons */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
            {!isLoading && (
                <>
                  <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 rounded-full"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isLoading}
                      title="Attach file"
                  >
                    <PaperclipIcon size={18} />
                  </Button>

                  <Button
                      type="button"
                      size="icon"
                      variant={hasContent ? "default" : "outline"}
                      className="h-9 w-9 rounded-full"
                      onClick={submitMessage}
                      disabled={isLoading || !hasContent}
                      title="Send message"
                  >
                    <ArrowUpIcon size={18} />
                  </Button>
                </>
            )}

            {isLoading && (
                <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    className="h-9 w-9 rounded-full border-destructive/30 hover:bg-destructive/10"
                    onClick={stop}
                    title="Stop generation"
                >
                  <StopIcon size={18} />
                </Button>
            )}
          </div>
        </div>
      </div>
  );
}