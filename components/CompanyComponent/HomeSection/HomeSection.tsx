import {FC, useContext} from "react";
import Typography from "@ui/Typography";
import {LocalizationsContext} from "@core/context";
import VideoWrapper from "@ui/VideoWrapper";
import {useMainSelector} from "@store/selectors";

export const HomeSection: FC = () => {

    let {currentLanguage} = useMainSelector();
    let {localizations} = useContext(LocalizationsContext);

    let {title} = localizations[currentLanguage].company;

    return (
        <div className={"py-24 container mx-auto max-xl:py-8"}>
            <div className={"flex items-center gap-10 max-xl:flex-col max-xl:gap-5"}>
                <Typography
                    className={"w-full"}
                    variant={"h1"}
                >
                    {title}
                </Typography>
                <VideoWrapper
                    iframeClassName={"rounded-3xl max-w-full overflow-hidden max-xl:w-full"}
                    className={"w-full flex justify-end"}
                    videoId={"UQ9HZjP0f1U"}
                />
            </div>
        </div>
    )
}