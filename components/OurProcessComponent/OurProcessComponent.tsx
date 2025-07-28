import {FC, useContext} from "react";
import {LocalizationsContext} from "@core/context";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import HelperSection from "@ui/Sections/HelperSection";
import dynamic from "next/dynamic";
import {useMainSelector} from "@store/selectors";

const DetailHomeSection = dynamic(() => import("@ui/Sections/DetailHomeSection"), {
    ssr: false
});
const ContentSection = dynamic(() => import("./ContentSection"));

export const OurProcessComponent: FC = () => {

    let router = useRouter();
    let {currentLanguage} = useMainSelector();
    let {localizations} = useContext(LocalizationsContext);

    let {
        title,
        shortDescription,
        description
    } = localizations[currentLanguage].process;

    const handleMainRedirect = () => router.push(ROUTES.MAIN,
        undefined,
        {shallow: true}
    );

    return (
        <>
            <DetailHomeSection
                isLoop={false}
                titleClassName={"sm:whitespace-nowrap"}
                className={"pb-20"}
                video={"5pFQ5jo4F-0"}
                backLabel={"Back to home"}
                title={title}
                description={shortDescription}
                onBack={handleMainRedirect}
            />
            <ContentSection
                description={description}
                title={"About our process"}
            />
            <HelperSection
                shadowColor={"white"}
            />
        </>
    )
}