import {FC, useState} from "react";
import Typography from "@ui/Typography";
import Editor from "@ui/Editor";
import Button from "@ui/Button";
import {BOLD_REGEXP} from "@common/variables";

export const AdminEditorComponent: FC = () => {

    const [content, setContent] = useState<string>("");

    const handleDataCopy = () => {
        let validContent = content.replaceAll(BOLD_REGEXP, "<strong>$1</strong>");
        let data = encodeURIComponent(validContent);
        navigator.clipboard.writeText(data);
    };

    return (
        <div className={"max-w-[768px] mx-auto grid grid-cols-1 gap-5"}>
            <Typography variant={"h1"}>
                Create service
            </Typography>
            <div className={"flex items-start gap-5 relative"}>
                <Editor
                    className={"w-full"}
                    setData={setContent}
                    data={content}
                />
                <Button
                    className={"absolute right-[-110px]"}
                    onClick={handleDataCopy}
                >
                    Copy
                </Button>
            </div>
        </div>
    )
}