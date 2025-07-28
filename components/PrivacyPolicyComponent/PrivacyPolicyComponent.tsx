import {FC, memo, useContext} from "react";
import Typography from "@ui/Typography";
import {LocalizationsContext} from "@core/context";
import {useMainSelector} from "@store/selectors";

export const PrivacyPolicyComponent: FC = memo(() => {

    const {currentLanguage} = useMainSelector();

    const {localizations} = useContext(LocalizationsContext);

    const {
        title,
        content
    } = localizations[currentLanguage].privacy;


    return (
        <div className={"container mx-auto py-10"}>
            <div className={"lg:max-w-[1024px]"}>
                <Typography
                    isAnimation={true}
                    variant={"h2"}
                    className={"mb-7"}
                >
                    {title}
                </Typography>
                <div dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        </div>
    )
});

PrivacyPolicyComponent.displayName = "PrivacyPolicyComponent";