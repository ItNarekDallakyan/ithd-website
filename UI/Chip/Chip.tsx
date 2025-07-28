import {FC, ReactNode} from "react";
import cs from "classnames";
import Typography from "@ui/Typography";
import {Weight} from "@ui/Typography/Typography";

interface ChipModel {
    children: ReactNode,
    className?: string,
    typographyClassName?: string,
    typographyWeight?: Weight,
    onClick?: () => void
}

export const Chip: FC<ChipModel> = (
    {
        children,
        className,
        onClick,
        typographyClassName,
        typographyWeight
    }
) => {
    return (
        <div
            className={cs({
                [className as string]: className,
                ["cursor-pointer hover:bg-grey transition-all"]: onClick
            }, "border-grey border rounded-full py-1 px-3")}
            onClick={onClick}
        >
            <Typography
                className={cs({
                    [typographyClassName as string]: typographyClassName
                })}
                weight={typographyWeight || "medium"}
                variant={"small"}
            >
                {children}
            </Typography>
        </div>
    )
}