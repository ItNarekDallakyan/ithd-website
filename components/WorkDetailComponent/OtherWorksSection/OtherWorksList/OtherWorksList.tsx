import {FC, useEffect} from "react";
import {ROUTES} from "@models/enums";
import {Helpers} from "@common/helpers";
import {WorkModel} from "@models/interfaces";
import InfoCard from "@ui/InfoCard";

interface OtherWorksListModel {
    language: string,
    onWorkRedirect: (route: string) => void,
    works: WorkModel[]
}

export const OtherWorksList: FC<OtherWorksListModel> = (
    {
        language,
        onWorkRedirect,
        works
    }
) => {

    useEffect(() => {
        console.log(works);
    }, [works]);

    const worksList = Helpers.getMultipleRandom(works, 6);

    return (
        <>
            {
                worksList.map((item, index) => {
                    let {
                        title,
                        path,
                        images
                    } = item;

                    let route = `${ROUTES.WORK}${path}`;

                    // @ts-ignore
                    let titleValue = title[language];

                    return (
                        <InfoCard
                            key={path}
                            image={images[0]}
                            title={titleValue}
                            onClick={() => onWorkRedirect(route)}
                        />
                    )
                })
            }
        </>
    )
}