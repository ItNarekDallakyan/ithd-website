import {FC, useContext} from "react";
import AdvantagesItem from "@components/ServiceDetailComponent/AdvantagesSection/AdvantagesItem";
import {ServicesPageContext} from "@context/global";
import {LANGUAGES} from "@models/enums";

export const AdvantagesSection: FC = () => {

    let {data} = useContext(ServicesPageContext);

    let {
        whatWeOffer,
        approach,
        process,
        media,
        expertise
    } = data;

    return (
        <div className={"pt-32 max-xl:pt-16 bg-white"}>
            <div className={"container mx-auto"}>
                <div className={"grid grid-cols-3 gap-16 mt-8 max-xl:grid-cols-1 max-xl:gap-8"}>
                    <AdvantagesItem
                        className={"max-xl:order-1"}
                        title={"What we offer"}
                        content={whatWeOffer[LANGUAGES.EN]}
                    />
                    <AdvantagesItem
                        className={"max-xl:order-2"}
                        title={"Approach"}
                        content={approach[LANGUAGES.EN]}
                    />
                    {
                        media.length
                            ?
                            <>
                                <img
                                    alt={"advantages-image"}
                                    className={"w-full rounded-2xl max-xl:order-3"}
                                    src={media[0]}
                                />
                                <img
                                    alt={"advantages-image"}
                                    className={"w-full rounded-2xl max-xl:order-6"}
                                    src={media[1]}
                                />
                            </>
                            :
                            null
                    }
                    <AdvantagesItem
                        className={"max-xl:order-4"}
                        title={"Expertise"}
                        content={expertise[LANGUAGES.EN]}
                    />
                    <AdvantagesItem
                        className={"max-xl:order-5"}
                        title={"Process"}
                        content={process[LANGUAGES.EN]}
                    />
                </div>
            </div>
        </div>
    )
}