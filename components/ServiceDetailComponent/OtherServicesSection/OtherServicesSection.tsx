import {FC, memo, useContext, useEffect, useState} from "react";
import Typography from "@ui/Typography";
import {ServicesPageContext} from "@context/global";
import {useMainSelector, useServicesSelector} from "@store/selectors";
import {ServiceModel} from "@models/interfaces";
import dynamic from "next/dynamic";

const ServicesList = dynamic(() => import("@components/ServicesComponent/ServicesList"));

export const OtherServicesSection: FC = memo(() => {

    let {data} = useContext(ServicesPageContext);
    let {currentLanguage} = useMainSelector();
    let {services} = useServicesSelector();

    let [otherServices, setOtherServices] = useState<ServiceModel[]>([]);

    let {path} = data;

    const generateOtherServicesList = () => {
        let sortedServices = services.filter(service => service.path != path);
        setOtherServices(sortedServices);
    }

    useEffect(() => {
        generateOtherServicesList();
    }, [data]);

    return (
        <div className={"bg-white py-32 max-sm:py-16"}>
            <div className={"container mx-auto"}>
                <Typography
                    className={"mb-10"}
                    variant={"h2"}
                >
                    Other services
                </Typography>
                <div className={"columns-3 gap-4 max-lg:columns-1"}>
                    <ServicesList
                        cardClassName={"mb-4 max-lg:w-full"}
                        language={currentLanguage}
                        services={otherServices}
                    />
                </div>
            </div>
        </div>
    )
});

OtherServicesSection.displayName = "OtherServicesSection";