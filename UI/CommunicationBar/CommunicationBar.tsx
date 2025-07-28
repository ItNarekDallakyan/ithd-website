import {FC, useContext} from "react";
import Button from "@ui/Button";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import {LocalizationsContext} from "@core/context";
import {useMainSelector} from "@store/selectors";

export const CommunicationBar: FC = () => {

    let {localizations} = useContext(LocalizationsContext);
    let {currentLanguage} = useMainSelector();
    const router = useRouter();

    const handleWorkRedirect = () => router.push(ROUTES.WORK,
        undefined,
        {shallow: true}
    );
    const handleContactRedirect = () => router.push(ROUTES.CONTACT,
        undefined,
        {shallow: true}
    );

    let {
        projectButtonLabel,
        workButtonLabel
    } = localizations[currentLanguage].main.homeSection;

    return (
        <div className={"justify-end flex items-center gap-3"}>
            <Button
                size={"large"}
                onClick={handleWorkRedirect}
            >
                {workButtonLabel}
            </Button>
            <Button
                size={"large"}
                color={"dark"}
                onClick={handleContactRedirect}
            >
                {projectButtonLabel}
            </Button>
        </div>
    )
}