import {FC} from "react";
import styles from "./Spinner.module.scss";

interface SpinnerModel {
    isLoading: boolean
}

export const Spinner: FC<SpinnerModel> = (
    {
        isLoading
    }
) => {
    return (
        isLoading
            ?
            <div
                className={styles.Spinner}
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            :
            null
    )
}