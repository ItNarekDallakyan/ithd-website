import {FC, memo, useContext} from "react";
import Typography from "@ui/Typography";
import {WorkPageContext} from "@context/global";
import {LocalizationsContext} from "@core/context";
import ScenesList from "@components/WorkDetailComponent/ScenesSection/ScenesList";
import {useMainSelector} from "@store/selectors";

export const ScenesSection: FC = memo(() => {

    const {currentLanguage} = useMainSelector();

    let {localizations} = useContext(LocalizationsContext);
    let workDetail = useContext(WorkPageContext);

    let {title} = localizations[currentLanguage].workDetail.scenes;

    let {images, imagesGrid} = workDetail.data;

    let gridClassNames = imagesGrid ? "columns-2 max-lg:columns-1 " : "";

    return (
        <div className={"container mx-auto"}>
            <Typography
                variant={"h2"}
                className={"pb-14"}
            >
                {title}
            </Typography>
            <div className={gridClassNames.concat("gap-10 space-y-10")}>
                <ScenesList
                    imagesGrid={imagesGrid}
                    scenes={images}
                />
            </div>
        </div>
    )
});

ScenesSection.displayName = "ScenesSection";