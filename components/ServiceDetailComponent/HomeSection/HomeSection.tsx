import {FC, memo, useContext} from "react";
import {ServicesPageContext} from "@context/global";
import {useMainSelector} from "@store/selectors";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import dynamic from "next/dynamic";

const DetailHomeSection = dynamic(() => import("@ui/Sections/DetailHomeSection"));

export const HomeSection: FC = memo(() => {

    let router = useRouter();
    let {data} = useContext(ServicesPageContext);
    let {currentLanguage} = useMainSelector();

    let {
        title,
        shortDescription,
        movie
    } = data;

    // @ts-ignore
    let titleValue = title[currentLanguage];

    // @ts-ignore
    let shortDescriptionValue = shortDescription[currentLanguage];

    const handleBackRedirect = () => router.push(ROUTES.SERVICES,
        undefined,
        {shallow: true}
    );

    return (
        <DetailHomeSection
            className={"pb-14"}
            backLabel={"Back to services"}
            title={titleValue}
            description={shortDescriptionValue}
            onBack={handleBackRedirect}
            video={movie || ""}
        />
    )
});

HomeSection.displayName = "HomeSection";