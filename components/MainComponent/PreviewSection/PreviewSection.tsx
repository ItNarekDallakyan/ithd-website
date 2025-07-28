import {FC, memo, useContext} from "react";
import styles from "./PreviewSection.module.scss";
import Button from "@ui/Button";
import {ROUTES} from "@models/enums";
import {useRouter} from "next/router";
import {LocalizationsContext} from "@core/context";
import cs from "classnames";
import HeaderListComponent from "@components/HeaderComponent/HeaderListComponent";
import {useMainSelector} from "@store/selectors";

export const PreviewSection: FC = memo(() => {

    let router = useRouter();

    const {currentLanguage} = useMainSelector();

    let {localizations} = useContext(LocalizationsContext);

    let {
        title,
        buttonLabel
    } = localizations[currentLanguage].main.previewSection;

    const handleContactRedirect = () => router.push(ROUTES.CONTACT, undefined, {shallow: true});

    return (
        <div
            id={"preview-section"}
            className={"h-screen relative flex items-center"}
        >
            <div className={"h-full absolute top-0 left-0 overflow-hidden"}>
                <video
                    crossOrigin={"anonymous"}
                    id={"preview-home-video"}
                    muted
                    autoPlay
                    preload={"auto"}
                    loop
                    playsInline
                    className={cs(styles.PreviewSection__player, "object-cover min-h-screen")}
                    src={"/videos/preview-movie.mp4"}
                />
            </div>
            <div className={"relative container mx-auto"}>
                <div
                    className={"text-7xl max-sm:text-5xl font-bold text-white"}
                    dangerouslySetInnerHTML={{__html: title}}></div>
                <div className={"flex items-center gap-10 mt-32 max-md:mt-12"}>
                    <Button
                        onClick={handleContactRedirect}
                    >
                        {buttonLabel}
                    </Button>
                    <div className={"flex items-center gap-10 max-md:hidden"}>
                        <HeaderListComponent
                            childrenClassName={"text-white"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
});

PreviewSection.displayName = "PreviewSection";