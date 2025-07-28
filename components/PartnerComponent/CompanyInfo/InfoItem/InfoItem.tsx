import {FC} from "react";
import Typography from "@ui/Typography";
import cs from "classnames";

interface InfoItemModel {
    label: string,
    value: string,
    href?: string,
    className?: string
}

export const InfoItem: FC<InfoItemModel> = (
    {
        label,
        value,
        href,
        className
    }
) => {
    return (
        <div className={cs({
            [className as string]: className
        }, "space-y-1 flex flex-col")}>
            <Typography
                className={"uppercase"}
                variant={"small"}
            >
                {label}
            </Typography>
            {
                href
                ?
                <a
                    className={"tracking-wider text-2xl text-dark font-bold sm:text-3xl hover:opacity-75 transition-all"}
                    href={href}
                >
                    {value}
                </a>
                :
                <Typography
                    variant={"h3"}
                    className={"text-2xl font-bold sm:text-3xl"}
                >
                    {value}
                </Typography>
            }
        </div>
    )
}