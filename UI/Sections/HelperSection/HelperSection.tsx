import {FC, useContext} from "react";
import PartSection from "@ui/PartSection";
import Button from "@ui/Button";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import {LocalizationsContext} from "@core/context";
import {useMainSelector} from "@store/selectors";

interface HelperSectionModel {
    shadowColor: string,
    containerClassName?: string
}

export const HelperSection: FC<HelperSectionModel> = (
    {
        shadowColor,
        containerClassName
    }
) => {

    let router = useRouter();
    let {currentLanguage} = useMainSelector();

    let {localizations} = useContext(LocalizationsContext);

    let {title, buttonLabel} = localizations[currentLanguage].helperSection;

    const handleContactRedirect = () => router.push(ROUTES.CONTACT,
        undefined,
        {shallow: true}
    );

    return (
        <PartSection
            containerClassName={containerClassName}
            shadowColor={shadowColor}
        >
            <div className={"flex container mx-auto flex-col items-start gap-7 p-16 max-lg:px-0 max-md:gap-3"}>
                <div
                    className={"text-5xl max-md:text-3xl font-bold leading-tight"}
                    dangerouslySetInnerHTML={{__html: title}}
                ></div>
                <Button
                    color={"dark"}
                    size={"large"}
                    onClick={handleContactRedirect}
                >
                    {buttonLabel}
                </Button>
            </div>
        </PartSection>
    )
}