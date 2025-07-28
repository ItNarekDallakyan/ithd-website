import React, {FC, memo, useEffect} from "react";
import styles from "./MessagesComponent.module.scss";
import {useMainSelector} from "core/store/selectors";
import Snackbar from "@ui/Snackbar";
import {Helpers} from "@common/helpers";
import {useAppDispatch} from "@hooks/toolkit";
import {LANGUAGES, STORAGE_KEYS} from "@models/enums";
import {setCurrentLanguage} from "@store/reducers/MainReducer";

export const MessagesComponent: FC = memo(() => {

    let dispatch = useAppDispatch();
    let state = useMainSelector();

    let width = Helpers.getDocumentScrollBarWidth();

    let wrapperStyles = {
        right: `${width}px`
    };

    useEffect(() => {
        let language = Helpers.getItemFromStorage(STORAGE_KEYS.LANGUAGE) || LANGUAGES.EN;
        dispatch(setCurrentLanguage(language as LANGUAGES));
    }, []);

    return (
        <div
            style={wrapperStyles}
            className={styles.MessagesComponent}
        >
            {
                state.messages.length
                    ?
                    state.messages.map(message => {
                        let {type, id, body} = message;

                        return (
                            <Snackbar
                                key={id}
                                type={type}
                                id={id as string}
                            >
                                {body}
                            </Snackbar>
                        )
                    })
                    :
                    null
            }
        </div>
    )
});

MessagesComponent.displayName = "MessagesComponent";
