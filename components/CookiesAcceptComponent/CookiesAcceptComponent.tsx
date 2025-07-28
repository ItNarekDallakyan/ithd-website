import {FC, useContext, useEffect, useState} from "react";
import styles from "./CookiesAcceptComponent.module.scss";
import Typography from "@ui/Typography";
import {LocalizationsContext} from "@core/context";
import Button from "@ui/Button";
import {Helpers} from "@common/helpers";
import {ROUTES, STORAGE_KEYS} from "@models/enums";
import cs from "classnames";
import CloseIcon from "@assets/icons/CloseIcon";
import {useRouter} from "next/router";
import {useMainSelector} from "@store/selectors";

export const CookiesAcceptComponent: FC = () => {

    const {currentLanguage} = useMainSelector();
    const {localizations} = useContext(LocalizationsContext);
    const router = useRouter();

    const [isCookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

    const {
        title,
        description,
        infoLink,
        submitLabel
    } = localizations[currentLanguage].cookies;

    const setInitialCookiesState = () => {
        let isAcceptedCookies = Helpers.getItemFromStorage(STORAGE_KEYS.IS_ACCEPT_COOKIES);
        if (!!isAcceptedCookies) return setCookiesAccepted(true);
        setCookiesAccepted(false);
    }

    const handleAcceptCookies = () => {
        Helpers.setItemToStorage(STORAGE_KEYS.IS_ACCEPT_COOKIES, "true");
        setCookiesAccepted(true);
    };

    const handleClose = () => setCookiesAccepted(true);

    const handlePrivacyRedirect = () => router.push(ROUTES.PRIVACY);

    useEffect(() => {
        setInitialCookiesState();
    }, []);

    return (
        isCookiesAccepted !== null
            ?
            !isCookiesAccepted
                ?
                <div className={cs(styles.CookiesAcceptComponent,
                    "w-[30%] z-[999999] max-lg:w-1/2 max-sm:w-3/4 flex flex-col gap-3 p-5 rounded-3xl shadow-lg bg-white fixed bottom-[30px] max-lg:bottom-[15px]"
                )}>
                    <div className={"flex items-center justify-between w-full"}>
                        <Typography variant={"h5"}>
                            {title}
                        </Typography>
                        <button
                            onClick={handleClose}
                            className={"w-[24px] h-[24px]"}
                        >
                            <div className={"w-full h-full"}>
                                <CloseIcon fill={"#646464"}/>
                            </div>
                        </button>
                    </div>
                    <Typography className={"flex flex-col"} variant={"body"}>
                        {description}<span onClick={handlePrivacyRedirect}
                                           className={"text-matisse underline cursor-pointer"}>{infoLink}</span>
                    </Typography>
                    <Button
                        className={"me-auto"}
                        hover={"background"}
                        onClick={handleAcceptCookies}
                    >
                        {submitLabel}
                    </Button>
                </div>
                :
                null
            :
            null
    )
}