import { Attachment } from "ai";
import { Loader2 } from "lucide-react"; // or your preferred icon library
import Image from "next/image";
import {cn} from "@lib/utils";

interface PreviewAttachmentProps {
    attachment: Attachment;
    isUploading?: boolean;
    className?: string;
}

export function PreviewAttachment({
                                      attachment,
                                      isUploading = false,
                                      className,
                                  }: PreviewAttachmentProps) {
    const { name, url, contentType } = attachment;

    const isImage = contentType?.startsWith("image/") ?? false;

    return (
        <div className={cn("flex flex-col gap-1.5", className)}>
            <div
                className={cn(
                    "group relative h-20 w-20 overflow-hidden rounded-lg bg-muted",
                    "border border-border/60 transition-colors",
                    isUploading && "opacity-75"
                )}
            >
                {isImage && url ? (
                    <Image
                        src={url}
                        alt={name ?? "Attachment preview"}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized={process.env.NODE_ENV === "development"} // optional
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground/70">
            <span className="text-xl font-medium uppercase tracking-wider">
              {contentType?.split("/")[1]?.slice(0, 4) || "FILE"}
            </span>
                    </div>
                )}

                {isUploading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                        <Loader2 className="h-6 w-6 animate-spin text-white/90 drop-shadow-md" />
                    </div>
                )}
            </div>

            <div
                className="max-w-[80px] truncate text-center text-xs font-medium text-muted-foreground/90"
                title={name}
            >
                {name || "unnamed"}
            </div>
        </div>
    );
}