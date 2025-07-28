import {FC, memo, useContext} from "react";
import Typography from "@ui/Typography";
import HelperSection from "@ui/Sections/HelperSection";
import {useMainSelector, useServicesSelector} from "@store/selectors";
import {LocalizationsContext} from "@core/context";
import dynamic from "next/dynamic";
import HomeSection from "@components/MainComponent/HomeSection";

const ServicesList = dynamic(() => import("@components/ServicesComponent/ServicesList"));
const FaqSection = dynamic(() => import("@components/CompanyComponent/FaqSection"));

export const ServicesComponent: FC = memo(() => {

    const {services} = useServicesSelector();

    let {currentLanguage} = useMainSelector();
    let {localizations} = useContext(LocalizationsContext);

    let {title} = localizations[currentLanguage].services;

    return (
        <div className={"space-y-20 max-sm:space-y-10"}>
            <HomeSection
                title={localizations[currentLanguage].services.preview.title}
                description={localizations[currentLanguage].services.preview.description}
                className={"pt-16 max-md:pt-8 pb-28 max-sm:pb-0"}
            />
            <div className={"container mx-auto flex gap-10 flex-col py-10 max-md:gap-5"}>
                <div className={"lg:w-2/4"}>
                    <Typography
                        variant={"h1"}
                    >
                        {title}
                    </Typography>
                </div>
                <div className={"columns-3 gap-4 max-lg:columns-1"}>
                    <ServicesList
                        cardClassName={"mb-4 max-lg:w-full"}
                        services={services}
                        language={currentLanguage}
                    />
                </div>
            </div>
            <FaqSection/>
            <HelperSection shadowColor={"spring"}/>
        </div>
    )
});

ServicesComponent.displayName = "ServicesComponent";