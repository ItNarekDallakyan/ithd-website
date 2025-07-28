import {FC, memo, useContext} from "react";
import Typography from "@ui/Typography";
import ServicesList from "@components/ServicesComponent/ServicesList";
import {useMainSelector} from "@store/selectors";
import {LocalizationsContext} from "@core/context";
import {SERVICES} from "@common/database";

export const ServicesSection: FC = memo(() => {

    let {currentLanguage} = useMainSelector();

    let {localizations} = useContext(LocalizationsContext);

    let {title} = localizations[currentLanguage].main.services;

    return (
        <div className={"bg-white py-32 max-md:py-16"}>
            <div className={"container mx-auto"}>
                <Typography
                    variant={"h2"}
                >
                    {title}
                </Typography>
                <div className={"columns-3 mt-8 gap-4 max-lg:columns-1"}>
                    <ServicesList
                        cardClassName={"mb-4 max-lg:w-full"}
                        services={SERVICES}
                        language={currentLanguage}
                    />
                </div>
            </div>
        </div>
    )
});

ServicesSection.displayName = "ServicesSection";