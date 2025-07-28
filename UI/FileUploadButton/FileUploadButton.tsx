import {ChangeEvent, Dispatch, FC, memo, SetStateAction, useRef, useState} from "react";
import styles from "./FileUploadButton.module.scss";
import {UploadImageIcon} from "@assets/icons/UploadImageIcon/UploadImageIcon";
import Typography from "@ui/Typography";
import cs from "classnames";
import {Helpers} from "@common/helpers";
import FilePreview from "@ui/FileUploadButton/FilePreview";

interface FileUploadButtonModel {
    id?: string,
    accept?: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>, setLoading: Dispatch<boolean>) => void,
    media?: string | null,
    onDelete: () => void,
    files?: string[],
    setFiles?: Dispatch<SetStateAction<string[]>>,
    onDroppedFileHandler?: (file: File, setLoading: Dispatch<boolean>) => void
}

export const FileUploadButton: FC<FileUploadButtonModel> = memo((
    {
        id,
        accept,
        handleChange,
        media,
        onDelete,
        files,
        setFiles,
        onDroppedFileHandler
    }
) => {

    let [isLoading, setLoading] = useState<boolean>(false);

    let fileButtonRef = useRef<HTMLDivElement | null>(null);

    const onDropFileHandler = async (event: any) => {
        event.preventDefault();

        if (!fileButtonRef.current || !setFiles) return;

        let response: any = await Helpers.filesFromDropHelper(event);

        if (!response) return;

        fileButtonRef.current.classList.remove("dragged");

        let names: string[] = [];

        for (let i = 0; i < response.length; i++) {
            let file = response[i];
            names.push(file.name);
        }

        setFiles(prevState => [...prevState, ...names]);
    }

    const onDragStartHandler = (event: any) => {
        event.preventDefault();
        if (!fileButtonRef.current) return;
        fileButtonRef.current.classList.add("dragged");
    }

    const onDragEndHandler = (event: any) => {
        event.preventDefault();
        if (!fileButtonRef.current) return;
        fileButtonRef.current.classList.remove("dragged");
    }

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        handleChange(event, setLoading);
    }

    return (
        <div className={cs(styles.FileUploadButton, "w-full rounded-2xl max-h-[250px] min-h-[250px] flex items-center overflow-hidden justify-center relative")}>
            {
                !media
                ?
                <label
                    className={"text-center flex-grow"}
                    htmlFor={id || "file-upload"}
                >
                    <div
                        ref={fileButtonRef}
                        id={"file-item"}
                        onDrop={onDropFileHandler}
                        onDragEnd={onDragEndHandler}
                        onDragLeave={onDragEndHandler}
                        onDragEnter={onDragStartHandler}
                        onDragOver={onDragStartHandler}
                        className={"max-h-[250px] min-h-[250px] rounded-2xl border border-grey gap-3 py-4 flex items-center justify-center flex-col cursor-pointer"}
                    >
                        <UploadImageIcon/>
                        <Typography
                            className={styles.FileUploadButton__description}
                            variant={"body"}
                        >
                            {
                                isLoading
                                ?
                                "Loading..."
                                :
                                "Upload image click here or Drag & Drop"
                            }
                        </Typography>
                    </div>
                </label>
                :
                <FilePreview
                    onDelete={onDelete}
                    media={media}
                />
            }
            <input
                className={"hidden"}
                name={"files"}
                multiple={false}
                accept={accept}
                onChange={handleFileChange}
                id={id || "file-upload"}
                type="file"
            />
        </div>
    )
});

FileUploadButton.displayName = "FileUploadButton";