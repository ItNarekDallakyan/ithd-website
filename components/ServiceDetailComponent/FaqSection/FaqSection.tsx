import {FC, memo, useContext} from "react";
import Typography from "@ui/Typography";
import FaqList from "@components/ServiceDetailComponent/FaqSection/FaqList";
import {ServicesPageContext} from "@context/global";

export const FaqSection: FC = memo(() => {

    const {data} = useContext(ServicesPageContext);

    let {faqList} = data;

    return (
        <div className={"bg-white pt-32 max-sm:pt-16"}>
            <div className={"container mx-auto flex items-start gap-10 max-xl:flex-col"}>
                <Typography
                    variant={"h2"}
                >
                    Frequently Asked Questions
                </Typography>
                <div className={"flex flex-col items-end justify-end w-full gap-3"}>
                    <FaqList
                        isInitialShow
                        accordionClassName={"xl:w-11/12 max-xl:w-full bg-transparent"}
                        faqList={faqList}
                    />
                </div>
            </div>
        </div>
    )
});

FaqSection.displayName = "FaqSection";