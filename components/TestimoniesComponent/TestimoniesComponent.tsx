import {FC, useContext} from "react";
import TestimoniesList from "@components/MainComponent/TestimoniesSection/TestimoniesList";
import {TESTIMONIES} from "@common/database/testimonies";
import {Typography} from "../../UI/Typography/Typography";
import HelperSection from "@ui/Sections/HelperSection";
import {LocalizationsContext} from "@core/context";

export const TestimoniesComponent: FC = () => {

    const {localizations} = useContext(LocalizationsContext);

    const {testimonies} = localizations.en;

    return (
        <>
            <div className={"flex flex-col pt-8 pb-32 max-lg:pb-16 container mx-auto gap-8"}>
                <Typography
                    variant={"h1"}
                >
                    {testimonies.title}
                </Typography>
                <div className={"grid grid-cols-2 gap-5 max-lg:grid-cols-1 max-sm:gap-3"}>
                    <TestimoniesList
                        testimonies={TESTIMONIES}
                    />
                </div>
            </div>
            <HelperSection
                shadowColor={"white"}
            />
        </>
    )
}