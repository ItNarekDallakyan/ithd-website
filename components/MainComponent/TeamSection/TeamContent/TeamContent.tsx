import {FC} from "react";
import Typography from "@ui/Typography";
import {TeamContentModel} from "@core/models/interfaces";
import Image from "next/image";
import VideoWrapper from "@ui/VideoWrapper";

export const TeamContent: FC<TeamContentModel> = (
    {
        content,
        media
    }
) => {
    return (
        <>
            <Typography
                weight={"medium"}
                className={"text-base font-bold sm:text-xl"}
                variant={"h3"}
            >
                {content}
            </Typography>
            <VideoWrapper
                iframeClassName={"rounded-2xl max-w-full max-sm:h-[175px]"}
                videoId={"UQ9HZjP0f1U"}
            />
        </>
    )
}