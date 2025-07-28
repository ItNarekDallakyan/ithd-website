import {FC, memo, Suspense, useContext, useEffect, useState} from "react";
import {WorkPageContext} from "@context/global";
import {useMainSelector} from "@store/selectors";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import CommunicationBar from "@ui/CommunicationBar";
import {LocalizationsContext} from "@core/context";
import dynamic from "next/dynamic";
import {Helpers} from "@common/helpers";

const ScenesSection = dynamic(() => import("@components/WorkDetailComponent/ScenesSection"), {
    suspense: true
});
const ContentSection = dynamic(() => import("@ui/Sections/ContentSection"));
const HelperSection = dynamic(() => import("@ui/Sections/HelperSection"));
const OtherWorksSection = dynamic(() => import("@components/WorkDetailComponent/OtherWorksSection"), {
    suspense: true
});
const DetailHomeSection = dynamic(() => import("@ui/Sections/DetailHomeSection"), {
    ssr: false
})

export const WorkDetailComponent: FC = memo(() => {

    let router = useRouter();
    let {currentLanguage} = useMainSelector();
    let workDetail = useContext(WorkPageContext);
    let {localizations} = useContext(LocalizationsContext);

    const [descriptionValue, setDescriptionValue] = useState<string>("");

    let {
        title,
        shortDescription,
        description,
        movie,
        images
    } = workDetail.data;

    let {
        backLabel,
        about
    } = localizations[currentLanguage].workDetail;

    // @ts-ignore
    let titleValue = title[currentLanguage];

    // @ts-ignore
    let shortDescriptionValue = shortDescription[currentLanguage];

    const handleCapabilitiesBack = () => router.push(ROUTES.WORK,
        undefined,
        {shallow: true}
    );

    const setDescriptionValueHandler = () => {
        if (!description) return;
        let data = Helpers.extractHTMLContent(description[currentLanguage], true);
        if (!data) return;
        setDescriptionValue(data);
    }

    useEffect(() => {
        setDescriptionValueHandler();
    }, [description]);


    return (
        <>
            <DetailHomeSection
                mediaChildren={<CommunicationBar/>}
                video={movie || ""}
                image={!movie ? images[0] : ""}
                className={"pb-14"}
                onBack={handleCapabilitiesBack}
                backLabel={backLabel}
                title={titleValue}
                description={shortDescriptionValue}
            />
            <ContentSection
                title={about.title}
                description={descriptionValue}
            />
            <div className={"flex flex-col gap-24 py-24 bg-white"}>
                <Suspense fallback={""}>
                    <ScenesSection/>
                </Suspense>
            </div>
            <HelperSection
                containerClassName={"bg-white"}
                shadowColor={"white"}
            />
            <div className={"container mx-auto flex flex-col gap-24 py-24"}>
                <Suspense fallback={""}>
                    <OtherWorksSection/>
                </Suspense>
            </div>
        </>
    )
});

WorkDetailComponent.displayName = "WorkDetailComponent";