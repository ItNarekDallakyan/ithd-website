import {FC, memo, useEffect, useState} from "react";
import Typography from "@ui/Typography";
import Button from "@ui/Button";
import {useRouter} from "next/router";
import cs from "classnames";
import VideoWrapper from "@ui/VideoWrapper";
import {Helpers} from "@common/helpers";

interface WorkExampleSectionModel {
    containerClassName?: string,
    rowClassName?: string,
    title: string,
    buttonLabel: string,
    routePath: string,
    video: string,
    description?: string,
    isOrdered?: boolean
}

export const WorkExampleSection: FC<WorkExampleSectionModel> = memo((
    {
        containerClassName,
        rowClassName,
        title,
        buttonLabel,
        routePath,
        video,
        description,
        isOrdered
    }
) => {

    const router = useRouter();

    const handleRedirect = () => router.push(routePath);

    const [descriptionValue, setDescriptionValue] = useState<string>("");

    const setDescriptionValueHandler = () => {
        if (!description) return;
        let value = Helpers.extractHTMLContent(description, true);
        if (!value) return;
        setDescriptionValue(value);
    }

    useEffect(() => {
        setDescriptionValueHandler();
    }, [description]);

    return (
        <div className={cs({
            [containerClassName as string]: containerClassName
        }, "flex items-center py-32 max-md:py-16 justify-center")}>
            <div className={cs({
                [rowClassName as string]: rowClassName
            }, "grid grid-cols-2 container mx-auto gap-32 max-lg:gap-7 max-lg:grid-cols-1 w-full")}>
                <div className={cs({
                    ["lg:order-1"]: isOrdered
                }, "flex flex-col gap-5 lg:mt-5")}>
                    <Typography
                        variant={"h2"}
                    >
                        {title}
                    </Typography>
                    <div
                        className={"text-dove-grey font-normal text-base sm:text-xl"}
                        dangerouslySetInnerHTML={{__html: descriptionValue}}
                    ></div>
                    <Button
                        className={"me-auto"}
                        size={"large"}
                        color={"orange"}
                        onClick={handleRedirect}
                    >
                        {buttonLabel}
                    </Button>
                </div>
                <VideoWrapper
                    className={cs({
                        ["lg:order-[-1]"]: isOrdered
                    })}
                    iframeClassName={"rounded-3xl overflow-hidden max-xl:w-full"}
                    videoId={video}
                />
            </div>
        </div>
    )
});

WorkExampleSection.displayName = "WorkExampleSection";