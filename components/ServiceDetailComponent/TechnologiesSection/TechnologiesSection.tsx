import {FC, useContext} from "react";
import Typography from "@ui/Typography";
import {ServicesPageContext} from "@context/global";
import TechnologiesList from "@components/ServiceDetailComponent/TechnologiesSection/TechnologiesList";

export const TechnologiesSection: FC = () => {

    let {
        data
    } = useContext(ServicesPageContext);

    let {
        technologies
    } = data;

    return (
        <div className={"bg-white pt-32 max-sm:pt-16"}>
            <div className={"container mx-auto flex items-start gap-10 flex-col"}>
                <Typography
                    variant={"h2"}
                >
                    Technologies
                </Typography>
                <div className={"grid grid-cols-3 gap-16 max-xl:gap-8 max-xl:grid-cols-1"}>
                    <TechnologiesList
                        technologies={technologies}
                    />
                </div>
            </div>
        </div>
    )
}