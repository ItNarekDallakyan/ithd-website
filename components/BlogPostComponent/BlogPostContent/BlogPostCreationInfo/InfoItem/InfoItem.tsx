import {FC} from "react";
import Typography from "@ui/Typography";
import cs from "classnames";

interface InfoItemModel {
    label: string,
    value: any,
    className?: string
}

export const InfoItem: FC<InfoItemModel> = (
    {
        label,
        value,
        className
    }
) => {

    let isValueString = typeof value === "string";

    return (
        <div className={cs({
            [className as string]: className
        },"flex flex-col")}>
            <Typography
                variant={"small"}
                weight={"medium"}
                className={"text-silver"}
            >
                {label}
            </Typography>
            {
                isValueString
                ?
                <div
                    className={"font-bold"}
                    dangerouslySetInnerHTML={{__html: value}}></div>
                :
                value
            }
        </div>
    )
}