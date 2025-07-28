import {FC, memo} from "react";
import HelperSection from "@ui/Sections/HelperSection";
import dynamic from "next/dynamic";

const HomeSection = dynamic(() => import("@components/CompanyComponent/HomeSection"));
const ContentSection = dynamic(() => import("@components/CompanyComponent/ContentSection"));
const ValuesSection = dynamic(() => import("@components/CompanyComponent/ValuesSection"));
const FaqSection = dynamic(() => import("@components/CompanyComponent/FaqSection"));

export const CompanyComponent: FC = memo(() => {
    return (
        <>
            <HomeSection/>
            <ContentSection/>
            <ValuesSection/>
            <FaqSection
                className={"pb-32 max-md:pb-16"}
            />
            <HelperSection
                shadowColor={"spring"}
            />
        </>
    )
});

CompanyComponent.displayName = "CompanyComponent";