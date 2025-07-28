import {FC} from "react";
import cs from "classnames";

interface ErrorMessageModel {
    error: string
}

export const ErrorMessage: FC<ErrorMessageModel> = (
    {
        error
    }
) => {
    return (
        <p className={cs({
            ["visible opacity-100"]: error,
            ["invisible opacity-0"]: !error
        }, "text-sm text-pink font-medium transition-all duration-700")}>{error}</p>
    )
}