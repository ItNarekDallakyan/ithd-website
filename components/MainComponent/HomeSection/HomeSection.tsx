import {FC, memo} from "react";
import Typography from "@ui/Typography";
import CommunicationBar from "@ui/CommunicationBar";
import cs from "classnames";
import Button from "@ui/Button";
import HeaderListComponent from "@components/HeaderComponent/HeaderListComponent";
import VideoWrapper from "@ui/VideoWrapper";

interface HomeSectionModel {
    className?: string,
    title: string,
    description?: string,
    onButtonClick?: () => void,
    buttonLabel?: string,
    isCommunications?: boolean
}

export const HomeSection: FC<HomeSectionModel> = memo((
    {
        className,
        isCommunications,
        title,
        description,
        onButtonClick,
        buttonLabel
    }
) => {
    return (
        <div className={cs({
            [className as string]: className
        }, "container mx-auto flex max-xl:flex-col gap-10 max-sm:gap-5")}>
            <div className={"xl:w-3/5 md:mt-8 flex flex-col gap-4"}>
                <div
                    className={"font-bold text-7xl max-md:text-5xl"}
                    dangerouslySetInnerHTML={{__html: title}}
                ></div>
                {
                    onButtonClick
                    && buttonLabel
                    &&
                    <div className={"flex items-center gap-10 mt-8 max-md:mt-4"}>
                        <Button
                            size={"large"}
                            onClick={onButtonClick}
                        >
                            {buttonLabel}
                        </Button>
                    </div>
                }
                {
                    description
                    &&
                    <Typography
                        className={"text-dove-grey font-normal text-base font-bold sm:text-xl xl:max-w-md w-full"}
                        variant={"h2"}
                    >
                        {description}
                    </Typography>
                }
            </div>
            <div className={"w-full flex flex-col gap-5 justify-start"}>
                <VideoWrapper
                    iframeClassName={"rounded-3xl max-w-full overflow-hidden max-xl:w-full"}
                    className={"flex justify-end"}
                    videoId={"5pFQ5jo4F-0"}
                />
                {
                    isCommunications
                    &&
                    <CommunicationBar/>
                }
            </div>
        </div>

    )
});

HomeSection.displayName = "HomeSection";