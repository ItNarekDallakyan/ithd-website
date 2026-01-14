import {FC, useContext} from "react";
import Typography from "@ui/Typography";
import QuoteIcon from "@assets/icons/QuoteIcon";
import FaqList from "@components/ServiceDetailComponent/FaqSection/FaqList";
import {LocalizationsContext} from "@core/context";
import {VALUES_FAQ} from "@common/database";
import {useMainSelector} from "@store/selectors";

export const ValuesSection: FC = () => {

    let {currentLanguage} = useMainSelector();
    let {localizations} = useContext(LocalizationsContext);

    let {purpose,purpose1,purpose2, values} = localizations[currentLanguage].company;

    return (
        <div className={"container mx-auto flex items-start max-xl:flex-col"}>
            <div className={"w-full pt-32 pb-16 max-md:py-12 max-xl:pb-5 max-sm:pb-0"}>
                <Typography
                    className={"mb-10"}
                    variant={"h2"}
                >
                    {values.title}
                </Typography>
                <div className={"flex items-start flex-col gap-3"}>
                    <FaqList
                        isInitialShow={true}
                        accordionClassName={"xl:w-11/12 max-xl:w-full bg-transparent"}
                        faqList={VALUES_FAQ}
                    />
                </div>
            </div>
            <div className={"w-full pt-32 pb-16 max-md:py-12 bg-white flex items-start gap-8 flex-col max-xl:pt-12"}>
                <div>
                    <QuoteIcon />
                </div>
                <Typography variant={"h2"}>
                    {purpose.title}
                </Typography>
                <Typography
                    weight={"normal"}
                    variant={"body"}
                    className={"mb-8"}
                >{purpose.description}
                </Typography>

                <Typography variant={"h2"}>
                    {purpose1.title}
                </Typography>
                <Typography
                    weight={"normal"}
                    variant={"body"}
                    className={"mb-8"}
                >{purpose1.description}
                </Typography>

                <Typography variant={"h2"}>
                    {purpose2.title}
                </Typography>
                <Typography
                    weight={"normal"}
                    variant={"body"}
                    className={"mb-8"}
                >{purpose2.description}
                </Typography>
            </div>
        </div>
    )
}