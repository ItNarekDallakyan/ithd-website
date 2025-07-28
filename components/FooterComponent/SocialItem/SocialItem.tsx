import {FC, MouseEventHandler, ReactNode} from "react";
import cs from "classnames";
import styles from "./SocialItem.module.scss";

interface SocialItemModel {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLLIElement>,
    dataValue?: string,
    hoverType?: "opacity"
}

export const SocialItem: FC<SocialItemModel> = (
    {
        children,
        onClick,
        dataValue,
        hoverType
    }
) => {
    return (
        <li
            data-value={dataValue}
            onClick={onClick}
            className={cs({
                    [styles.SocialItem]: hoverType !== "opacity",
                    ["[&>svg]:hover:opacity-70 [&>svg]:transition-all"]: hoverType === "opacity"
                }, "p-2 rounded-full cursor-pointer list-none"
            )}
        >
            {children}
        </li>
    )
}