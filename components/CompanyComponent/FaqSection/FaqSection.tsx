import {FC, useContext} from "react";
import Typography from "@ui/Typography";
import FaqList from "@components/CompanyComponent/FaqSection/FaqList";
import cs from "classnames";
import {LocalizationsContext} from "@core/context";
import {useMainSelector} from "@store/selectors";

interface FaqSectionModel {
    className?: string,
    isAnimation?: boolean
}

export const FaqSection: FC<FaqSectionModel> = (
    {
        className,
        isAnimation
    }
) => {

    let {currentLanguage} = useMainSelector();
    let {localizations} = useContext(LocalizationsContext);

    let {title} = localizations[currentLanguage].company.faq;

    return (
        <div className={cs({
            [className as string]: true
        }, "container mx-auto")}>
            <Typography
                isAnimation={isAnimation || false}
                className={"mb-10 max-md:mb-7"}
                variant={"h1"}
            >
                {title}
            </Typography>
            <div className={"flex items-start flex-wrap gap-16 max-md:gap-8"}>
                <FaqList/>
            </div>
        </div>
    )
}