import {FC, memo} from "react";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import {Helpers} from "@common/helpers";
import {WorkModel} from "@models/interfaces";
import dynamic from "next/dynamic";

interface WorksListModel {
    language: string,
    works: WorkModel[]
}

const InfoCard = dynamic(() => import("@ui/InfoCard"), {
    ssr: false
});

export const WorksList: FC<WorksListModel> = memo((
    {
        language,
        works
    }
) => {

    const router = useRouter();

    const worksList = Helpers.getMultipleRandom(works, works.length);

    return (
        <>
            {
                worksList.map((item, index) => {

                    let {
                        title,
                        path,
                        movie,
                        images
                    } = item;

                    // @ts-ignore
                    let titleValue = title[language];

                    let workDetailPath = `${ROUTES.WORK}${path}`;

                    const handleWorkRedirect = () => router.push(workDetailPath,
                        undefined,
                        {shallow: true}
                    );

                    return (
                        <InfoCard
                            key={index}
                            image={images[0]}
                            movie={movie}
                            title={titleValue}
                            onClick={handleWorkRedirect}
                        />
                    )
                })
            }
        </>
    )
});

WorksList.displayName = "WorksList";