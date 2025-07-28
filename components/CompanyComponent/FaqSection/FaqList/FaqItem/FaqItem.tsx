import {FC, ReactNode} from "react";
import Typography from "@ui/Typography";
import cs from "classnames";

interface FaqItemModel {
    title: string,
    children: ReactNode,
    className?: string
}

export const FaqItem: FC<FaqItemModel> = (
    {
        title,
        children,
        className
    }
) => {
    return (
        <div className={cs(
            {
                [className as string]: className
            },
            "flex flex-col items-start gap-2"
        )}>
            <Typography
                className={"text-xl font-bold sm:text-xl"}
                variant={"h3"}
            >
                {title}
            </Typography>
            <div
                dangerouslySetInnerHTML={{__html: children as any}}
            ></div>
        </div>
    )
}