import {FC, MouseEvent, ReactNode} from "react";
import cs from "classnames";
import styles from "./Button.module.scss";
import {ButtonColorPropsModel} from "@models/interfaces";
import Loader from "@ui/Button/Loader";

interface ButtonModel extends ButtonColorPropsModel {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
    children: ReactNode,
    size?: "small" | "large",
    disabled?: boolean,
    className?: string,
    type?: "submit" | "reset",
    isLoading?: boolean,
    hover?: "up" | "background"
}

export const Button: FC<ButtonModel> = (
    {
        type,
        onClick,
        children,
        size,
        disabled,
        className,
        color,
        isLoading,
        hover
    }
) => {
    return (
        <button
            data-hover={hover || "up"}
            className={cs({
                    [styles.Button]: true,
                    [className as string]: className
                },
                styles[size || "small"],
                styles[color || "orange"],
                "rounded-full transition-all duration-500 whitespace-nowrap gap-1 font-medium flex items-center justify-center cursor-pointer"
            )}
            type={type || "button"}
            disabled={disabled || isLoading}
            onClick={onClick}
        >
            {
                !isLoading
                    ?
                    children
                    :
                    <Loader className={"flex justify-center items-center"}/>}
        </button>
    )
}
