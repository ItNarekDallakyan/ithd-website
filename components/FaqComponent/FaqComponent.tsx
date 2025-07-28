import {FC, memo} from "react";
import HelperSection from "@ui/Sections/HelperSection";
import dynamic from "next/dynamic";

const FaqSection = dynamic(() => import("@components/CompanyComponent/FaqSection"));

export const FaqComponent: FC = memo(() => {
    return (
        <>
            <FaqSection
                isAnimation={true}
                className={"py-16"}
            />
            <HelperSection
                shadowColor={"white"}
            />
        </>
    )
});

FaqComponent.displayName = "FaqComponent";