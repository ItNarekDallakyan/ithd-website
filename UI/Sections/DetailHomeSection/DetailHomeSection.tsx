import {FC, ReactNode} from "react";
import Typography from "@ui/Typography";
import cs from "classnames";
import Image from "next/image";
import {Helpers} from "@common/helpers";
import VideoWrapper from "@ui/VideoWrapper";

interface DetailHomeSectionModel {
    backLabel: string,
    title: string,
    description: string,
    className?: string,
    onBack: () => void,
    video?: string,
    image?: string,
    bottomChildren?: ReactNode,
    titleClassName?: string,
    mediaChildren?: ReactNode,
    isLoop?: boolean,
    isSmallImage?: boolean
}

let imageBaseClassName = "w-full object-cover rounded-2xl max-sm:min-h-[30vh] max-sm:max-h-[30vh]";
let imageContainerClassName = "flex flex-col gap-5 justify-end";
let descriptionClassName = "text-dove-grey md:mb-5 w-full";

export const DetailHomeSection: FC<DetailHomeSectionModel> = (
    {
        backLabel,
        title,
        description,
        className,
        onBack,
        image,
        video,
        titleClassName,
        bottomChildren,
        mediaChildren,
        isLoop,
        isSmallImage
    }
) => {

    let imageSizesStyles = isSmallImage ?
        imageBaseClassName.concat(" max-h-[45vh] min-h-[45vh]")
        : imageBaseClassName.concat(" max-h-[60vh] min-h-[60vh]");
    let imageContainerStyles = isSmallImage
        ? imageContainerClassName.concat(" w-[50%] max-lg:w-full")
        : imageContainerClassName.concat(" w-full");
    let descriptionStyles = isSmallImage
        ? descriptionClassName.concat(" w-full")
        : descriptionClassName.concat(" lg:max-w-md");

    const titleValue = Helpers.extractHTMLContent(title, true);
    const descriptionValue = Helpers.extractHTMLContent(description, true);

    return (
        <div className={cs({
            [className as string]: true
        }, "pt-16 container mx-auto max-lg:pb-16 max-sm:py-5")}>
            <div className={"w-full items-start justify-between flex max-lg:flex-col gap-5"}>
                <div className={"w-8/12 flex flex-col gap-5 max-lg:w-full max-sm:gap-3"}>
                    <Typography
                        weight={"medium"}
                        onClick={onBack}
                        className={"text-orange max-w-md w-full cursor-pointer"}
                        variant={"body"}
                    >
                        {backLabel}
                    </Typography>
                    <div
                        className={cs({
                            [titleClassName as string]: true
                        }, "text-4xl w-full font-bold max-sm:text-4xl")}
                        dangerouslySetInnerHTML={{__html: titleValue || ""}}
                    ></div>
                    <div
                        className={cs(descriptionStyles, "text-base sm:text-xl")}
                        dangerouslySetInnerHTML={{__html: descriptionValue || ""}}
                    ></div>
                    {bottomChildren}
                </div>
                <div className={cs(imageContainerStyles, "rounded-3xl")}>
                    {
                        video
                            ?
                            <VideoWrapper
                                iframeClassName={"rounded-3xl overflow-hidden max-xl:w-full"}
                                className={"flex max-xl:justify-start justify-end overflow-hidden"}
                                videoId={video}
                            />
                            :
                            <Image
                                priority
                                title={title}
                                className={imageSizesStyles}
                                height={300}
                                width={300}
                                alt={"detail-image"}
                                src={image || ""}
                            />
                    }
                    {mediaChildren}
                </div>
            </div>
        </div>
    )
}