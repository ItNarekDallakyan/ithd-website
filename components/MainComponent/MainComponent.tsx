import {FC, memo, useContext} from "react";
import HelperSection from "@ui/Sections/HelperSection";
import {LocalizationsContext} from "@core/context";
import {ROUTES} from "@models/enums";
import dynamic from "next/dynamic";
import ContactUsSection from "@components/MainComponent/ContactUsSection";
import PartnersSection from "@components/MainComponent/PartnersSection";
import {useRouter} from "next/router";
import TestimoniesSection from "@components/MainComponent/TestimoniesSection";
import {useMainSelector} from "@store/selectors";

const TeamSection = dynamic(() => import("@components/MainComponent/TeamSection"));
const HomeSection = dynamic(() => import("@components/MainComponent/HomeSection"));
const ServicesSection = dynamic(() => import("@components/MainComponent/ServicesSection"));
const WorkExampleSection = dynamic(() => import("@components/MainComponent/WorkExampleSection"));

export const MainComponent: FC = memo(() => {

    const {currentLanguage} = useMainSelector();
    let router = useRouter();
    let {localizations} = useContext(LocalizationsContext);

    let {
        title,
        buttonLabel
    } = localizations[currentLanguage].main.previewSection;

    const handleContactRedirect = () => router.push(ROUTES.CONTACT, undefined, {
        shallow: true
    });

    return (
        <>
            <HomeSection
                onButtonClick={handleContactRedirect}
                buttonLabel={buttonLabel}
                title={title}
                isCommunications
                className={"py-32 max-md:py-16"}
            />
            <ServicesSection/>
            <WorkExampleSection
                key={"1"}
                description={localizations[currentLanguage].main.cryptoWalletSection.description}
                buttonLabel={localizations[currentLanguage].main.cryptoWalletSection.buttonLabel}
                title={localizations[currentLanguage].main.cryptoWalletSection.title}
                video={"Ga8hidtwCFA"}
                routePath={`${ROUTES.WORK}/crypto-wallet`}
            />
            <ContactUsSection/>
            <WorkExampleSection
                isOrdered
                key={"2"}
                description={localizations[currentLanguage].main.cryptoAppSection.description}
                buttonLabel={localizations[currentLanguage].main.cryptoAppSection.buttonLabel}
                video={"YtCRE0TnV4Y"}
                routePath={ROUTES.CONTACT}
                title={localizations[currentLanguage].main.cryptoAppSection.title}
            />
            <HelperSection
                containerClassName={"bg-white"}
                shadowColor={"white"}
            />
        </>
    )
});

MainComponent.displayName = "MainComponent";