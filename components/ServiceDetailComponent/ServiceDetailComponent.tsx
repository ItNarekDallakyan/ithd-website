import {FC, memo, useContext} from "react";
import {ServicesPageContext} from "@context/global";
import {useMainSelector} from "@store/selectors";
import HelperSection from "@ui/Sections/HelperSection";
import {WorkModel} from "@models/interfaces";
import {Helpers} from "@common/helpers";
import dynamic from "next/dynamic";
import AdvantagesSection from "@components/ServiceDetailComponent/AdvantagesSection";
import TechnologiesSection from "@components/ServiceDetailComponent/TechnologiesSection";

interface ServiceDetailComponentModel {
    works: WorkModel[]
}

const HomeSection = dynamic(() => import("@components/ServiceDetailComponent/HomeSection"));
const FaqSection = dynamic(() => import("@components/ServiceDetailComponent/FaqSection"));
const ContentSection = dynamic(() => import("@ui/Sections/ContentSection"));
const OtherWorksSection = dynamic(() => import("@components/ServiceDetailComponent/OtherWorksSection"));
const OtherServicesSection = dynamic(() => import("@components/ServiceDetailComponent/OtherServicesSection"));

export const ServiceDetailComponent: FC<ServiceDetailComponentModel> = memo(({works}) => {

    let {currentLanguage} = useMainSelector();
    let {data} = useContext(ServicesPageContext);

    let {description} = data;

    // @ts-ignore
    let descriptionValue = description[currentLanguage];
    let worksList = Helpers.getMultipleRandom(works, works.length);

    return (
        <>
            <HomeSection/>
            <ContentSection
                description={descriptionValue}
                title={"About service"}
            />
            <AdvantagesSection />
            <TechnologiesSection />
            <FaqSection/>
            <OtherServicesSection/>
            <OtherWorksSection
                works={worksList}
            />
            <HelperSection
                containerClassName={"bg-white"}
                shadowColor={"white"}
            />
        </>
    )
});

ServiceDetailComponent.displayName = "ServiceDetailComponent";
