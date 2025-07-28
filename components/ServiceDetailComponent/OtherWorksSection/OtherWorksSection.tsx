import {FC, memo} from "react";
import Typography from "@ui/Typography";
import OtherWorksList from "@components/WorkDetailComponent/OtherWorksSection/OtherWorksList";
import {useMainSelector} from "@store/selectors";
import {useRouter} from "next/router";
import {WorkModel} from "@models/interfaces";

interface OtherWorksSectionModel {
    works: WorkModel[]
}

export const OtherWorksSection: FC<OtherWorksSectionModel> = memo((
    {
        works
    }
) => {

    let {currentLanguage} = useMainSelector();
    let router = useRouter();

    const handleWorkRedirect = (route: string) => router.push(route,
        undefined,
        {shallow: true});

    return (
        <div className={"bg-spring py-32 max-sm:py-16"}>
            <div className={"container mx-auto"}>
                <Typography
                    className={"mb-10"}
                    variant={"h2"}
                >
                    Our Favorite Works
                </Typography>
                <div className={"grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5"}>
                    <OtherWorksList
                        language={currentLanguage}
                        onWorkRedirect={handleWorkRedirect}
                        works={works}
                    />
                </div>
            </div>
        </div>
    )
});

OtherWorksSection.displayName = "OtherWorksSection";