import {FC} from "react";
import TileCard from "@ui/TileCard";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import cs from "classnames";
import {ServiceModel} from "@models/interfaces";

interface ServicesListModel {
    language: string,
    services: ServiceModel[],
    cardClassName?: string
}

export const ServicesList: FC<ServicesListModel> = (
    {
        language,
        services,
        cardClassName
    }
) => {

    let router = useRouter();

    return (
        <>
            {
                services.map((service, index) => {
                    let {title, shortDescription, path} = service;

                    // @ts-ignore
                    let titleValue = title[language];

                    // @ts-ignore
                    let descriptionValue = shortDescription[language];

                    const handleServiceRedirect = () => router.push(`${ROUTES.SERVICES}${path}`);

                    return (
                        <TileCard
                            className={cs({
                                [cardClassName as string]: cardClassName
                            }, "inline-block")}
                            key={index}
                            onClick={handleServiceRedirect}
                            description={descriptionValue}
                            title={titleValue}
                        />
                    )
                })
            }
        </>

    )
}