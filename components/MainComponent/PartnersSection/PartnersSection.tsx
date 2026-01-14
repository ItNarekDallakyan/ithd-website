import {FC, useContext} from "react";
import PartnersList from "@components/MainComponent/PartnersSection/PartnersList";
import Typography from "@ui/Typography";
import {LocalizationsContext} from "@core/context";
import {useMainSelector} from "@store/selectors";

export const PartnersSection: FC = () => {

    const {currentLanguage} = useMainSelector();

    const {localizations} = useContext(LocalizationsContext);

    const {partnersSection} = localizations[currentLanguage].main;

    return (
        <div className="container mx-auto pt-16 pb-16 max-md:pt-16 max-md:pb-16 w-full">
            <div className={"flex items-center max-lg:flex-col gap-32 max-lg:gap-8"}>
                <Typography variant={"h2"}>
                    {partnersSection.title}
                </Typography>
                <div className={"grid grid-cols-2 gap-5 max-lg:gap-3"}>
                    <PartnersList />
                </div>
            </div>
        </div>
    )
}