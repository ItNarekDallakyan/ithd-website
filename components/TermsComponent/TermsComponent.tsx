import {FC, memo, useContext} from "react";
import {LocalizationsContext} from "@core/context";
import Typography from "@ui/Typography";
import dynamic from "next/dynamic";
import {useMainSelector} from "@store/selectors";

const TermsList = dynamic(() => import("@components/TermsComponent/TermsList"));

export const TermsComponent: FC = memo(() => {

    const {currentLanguage} = useMainSelector();

    const {localizations} = useContext(LocalizationsContext);

    const {
        title,
        rules
    } = localizations[currentLanguage].terms;

    return (
        <div className={"container lg:max-w-[1024px] py-10"}>
            <Typography
                isAnimation={true}
                variant={"h2"}
                className={"mb-7"}
            >
                {title}
            </Typography>
            <TermsList
                terms={rules}
            />
        </div>
    )
});

TermsComponent.displayName = "TermsComponent";