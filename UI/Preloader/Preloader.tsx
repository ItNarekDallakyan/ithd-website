import {FC} from "react";
import styles from "./Preloader.module.scss";
import cs from "classnames";
import Spinner from "@ui/Loaders/Spinner";

interface PreloaderModel {
    isLoading: boolean
}

export const Preloader: FC<PreloaderModel> = (
    {
        isLoading
    }
) => {
    return (
        isLoading
        ?
        <div className={cs(styles.Preloader, "flex w-full h-full items-center justify-center fixed left-0 top-0")}>
            <Spinner
                isLoading={true}
            />
        </div>
        :
        null
    )
}