import {FC} from "react";
import Typography from "@ui/Typography";
import {Variant} from "@ui/Typography/Typography";
import cs from "classnames";

interface AdvantagesItemModel {
    title: string,
    content: string,
    variant?: Variant,
    className?: string,
    contentClassName?: string
}

export const AdvantagesItem: FC<AdvantagesItemModel> = (
    {
        title,
        content,
        variant,
        contentClassName,
        className
    }
) => {
    return (
        <div className={cs({
            [className as string]: className
        }, "flex-col flex items-start gap-2")}>
            <Typography
                variant={variant || "h2"}
                className={"font-semibold font-bold text-base font-bold sm:text-xl"}
            >
                {title}
            </Typography>
            <div
                dangerouslySetInnerHTML={{__html: content}}
                className={cs({
                [contentClassName as string]: contentClassName
            }, "text-dove-grey")}></div>
        </div>
    )
}