import {ElementType, FC, ReactNode} from "react";
import styles from "./Typography.module.scss";
import cs from "classnames";

export type Variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body"
    | "small"
    | "large"
    ;

export type Weight =
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";

interface Props {
    variant: Variant,
    onClick?: () => void
    children: ReactNode,
    className?: string,
    as?: ElementType,
    isAnimation?: boolean,
    weight?: Weight
}

const tags: Record<Variant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    body: "p",
    small: "span",
    large: "h1"
};

const sizes: Record<Variant, string> = {
    h1: "text-4xl font-bold sm:text-5xl",
    h2: "text-3xl font-bold sm:text-4xl",
    h3: "text-3xl font-bold sm:text-4xl",
    h4: "text-2xl font-bold sm:text-3xl",
    h5: "text-base font-bold sm:text-xl",
    body: "text-sm sm:text-base",
    small: "text-sm",
    large: "text-7xl max-sm:text-5xl"
};

export const Typography: FC<Props> = (
    {
        variant,
        children,
        className,
        onClick,
        as,
        isAnimation,
        weight
    }) => {

    const sizeClasses = sizes[variant];
    const Tag = as || tags[variant];

    return (
        <Tag
            onClick={onClick}
            className={cs({
                [styles.Typography__active]: isAnimation,
                [`font-${weight}`]: weight
            }, `${sizeClasses} ${className} lh-128 relative inline-block`)}
        >
            {children}
        </Tag>
    )
}