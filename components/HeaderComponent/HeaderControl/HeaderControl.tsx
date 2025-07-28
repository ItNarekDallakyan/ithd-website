import React, {FC, useContext} from "react";
import styles from "./HeaderControl.module.scss";
import {Button} from "@ui/Button/Button";
import {LocalizationsContext} from "@core/context";
import {useMainSelector} from "@store/selectors";

interface HeaderControlModel {
    onContact: () => void
}

export const HeaderControl: FC<HeaderControlModel> = (
    {
        onContact
    }
) => {

    const {currentLanguage} = useMainSelector();

    let {localizations} = useContext(LocalizationsContext);

    return (
        <>
            <Button
                className={styles.HeaderControl}
                onClick={onContact}
                size={"small"}
            >
                {localizations[currentLanguage].header.actionButtonLabel}
            </Button>
        </>
    )
}
