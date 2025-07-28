import {FC, ReactNode, useEffect} from "react";
import styles from "./Snackbar.module.scss";
import cs from "classnames";
import {useAppDispatch} from "@hooks/toolkit";
import {deleteMessage} from "@store/reducers/MainReducer";
import Image from "next/image";

interface SnackbarModel {
    children: ReactNode,
    type: string,
    id: string
}

const CLOSE_TIMEOUT = 5000;

export const Snackbar: FC<SnackbarModel> = (
    {
        children,
        id,
        type
    }
) => {

    let dispatch = useAppDispatch();

    useEffect(() => {

        let closeAlertTimeout: ReturnType<typeof setTimeout>;

        closeAlertTimeout = setTimeout(() => {
            dispatch(deleteMessage(id));
        }, CLOSE_TIMEOUT);

        return () => clearTimeout(closeAlertTimeout);

    }, []);

    const handleClose = () => dispatch(deleteMessage(id));

    return (
        <div className={cs({
            [styles.Snackbar]: true
        }, styles[type], "w-full flex items-center justify-between rounded-2xl")}>
            <p className={"text-white"}>
                {children}
            </p>
            <button className={"cursor-pointer"} onClick={handleClose}>
                <Image
                    width={24}
                    height={24}
                    quality={80}
                    src={"/images/close-icon.svg"}
                    alt={"close-icon"}
                />
            </button>
        </div>
    )
}