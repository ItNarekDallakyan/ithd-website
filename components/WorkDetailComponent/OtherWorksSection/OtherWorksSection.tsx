import {FC, memo, useContext, useEffect} from "react";
import Typography from "@ui/Typography";
import {useMainSelector} from "@store/selectors";
import {LocalizationsContext} from "@core/context";
import {WorkPageContext} from "@context/global";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import {WORKS} from "@common/database";

const OtherWorksList = dynamic(() => import("./OtherWorksList"));

export const OtherWorksSection: FC = memo(() => {

    let {currentLanguage} = useMainSelector();
    let workDetail = useContext(WorkPageContext);
    let router = useRouter();
    let {localizations} = useContext(LocalizationsContext);

    let availableWorks = WORKS.filter(work => work.path !== workDetail.data.path);

    let {title} = localizations[currentLanguage].workDetail.otherWorks;

    const handleWorkRedirect = async (route: string) => {
        await router.push(route);
    }

    return (
        <div>
            <Typography
                variant={"h2"}
                className={"pb-14"}
            >
                {title}
            </Typography>
            <div className={"grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5"}>
                <OtherWorksList
                    works={availableWorks}
                    onWorkRedirect={handleWorkRedirect}
                    language={currentLanguage}
                />
            </div>
        </div>
    )
});

OtherWorksSection.displayName = "OtherWorksSection";