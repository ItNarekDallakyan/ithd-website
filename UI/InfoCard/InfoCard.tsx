import {FC, ReactNode} from "react";
import Typography from "@ui/Typography";
import VideoWrapper from "@ui/VideoWrapper";
import cs from "classnames";

interface InfoCardModel {
    image?: string,
    alt?: string,
    title: string,
    onClick: () => void,
    movie?: string,
    children?: ReactNode,
    className?: string
}

export const InfoCard: FC<InfoCardModel> = (
    {
        image,
        movie,
        alt,
        title,
        onClick,
        children,
        className
    }
) => {
    return (
        <div
            onClick={onClick}
            className={cs({
                [className as string]: className
            }, "group flex flex-col gap-3 w-full cursor-pointer")}
        >
            {
                movie || image
                    ?
                    movie
                        ?
                        <VideoWrapper
                            className={"w-full h-[225px]"}
                            iframeClassName={"w-full rounded-3xl h-[225px]"}
                            videoId={movie}
                        />
                        :
                        <img
                            className={"rounded-3xl h-[225px] object-cover"}
                            loading={"lazy"}
                            src={image}
                            alt={alt || "info-card-image"}
                        />
                    :
                    null
            }
            <div className={"px-3 pb-3 flex flex-col"}>
                {children}
                <Typography
                    className={"group-hover:text-orange transition-all duration-300"}
                    variant={"h5"}
                >
                    {title}
                </Typography>
            </div>
        </div>
    )
}