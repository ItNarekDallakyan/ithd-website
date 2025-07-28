import {FC} from "react";
import DeleteIcon from "@assets/icons/DeleteIcon";

interface FilePreviewModel {
    onDelete: () => void,
    media: string
}

export const FilePreview: FC<FilePreviewModel> = (
    {
        media,
        onDelete
    }) => {

    let splitFormat = media.slice(media.length - 4, media.length);

    return (
        splitFormat.includes("mov") || splitFormat.includes("mp4")
            ?
            <>
                {/*<VideoJS*/}
                {/*    options={videoJsOptions}*/}
                {/*/>*/}
                {DeleteButtonView(onDelete)}
            </>
            :
            <>
                <img
                    alt={"file-image"}
                    className={"object-cover w-full max-h-[250px] min-h-[250px]"}
                    src={media}
                />
                {DeleteButtonView(onDelete)}
            </>
    )
}

const DeleteButtonView = (onDelete: () => void) => {
    return (
        <div
            onClick={onDelete}
            className={"absolute cursor-pointer bg-white p-2 rounded z-10 right-[15px] top-[15px]"}
        >
            <DeleteIcon fill={"#f96f6f"}/>
        </div>
    )
}