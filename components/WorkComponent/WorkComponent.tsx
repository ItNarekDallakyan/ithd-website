import {FC, memo, useContext} from "react";
import {Typography} from "@ui/Typography/Typography";
import {useMainSelector} from "@store/selectors";
import HelperSection from "@ui/Sections/HelperSection";
import {LocalizationsContext} from "@core/context";
import {WorkModel} from "@models/interfaces";
import WorksList from "@components/WorkComponent/WorksList";

interface WorkComponentModel {
    works: WorkModel[]
}

export const WorkComponent: FC<WorkComponentModel> = memo((
    {
        works
    }
) => {

    let {currentLanguage} = useMainSelector();
    let {localizations} = useContext(LocalizationsContext);

    let {title} = localizations[currentLanguage].work;

    return (
        <div className={"space-y-20"}>
            <div className={"py-10 container mx-auto"}>
                <div className={"flex justify-center flex-col gap-14"}>
                    <div className={"inline"}>
                        <Typography
                            variant={"h1"}
                        >
                            {title}
                        </Typography>
                    </div>
                    <div className={"transition-all grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5"}>
                        <WorksList
                            works={works}
                            language={currentLanguage}
                        />
                    </div>
                </div>
            </div>
            <HelperSection
                shadowColor={"white"}
            />
        </div>
    )
});

WorkComponent.displayName = "WorkComponent";
