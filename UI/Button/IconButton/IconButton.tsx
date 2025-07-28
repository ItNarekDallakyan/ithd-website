import {FC} from "react";
import cs from "classnames";
import Typography from "@ui/Typography";
import Image from "next/image";

interface IconButtonModel {
    onClick: () => void,
    className?: string,
    label?: string,
    iconPath: string
}

export const IconButton: FC<IconButtonModel> = (
    {
        onClick,
        className,
        label,
        iconPath
    }
) => {
    return (
        <div className={"flex items-center flex-col text-center gap-1.5"}>
            <button
                onClick={onClick}
                className={cs({
                    [className as string]: className
                }, "rounded-full w-[45px] h-[45px] flex items-center justify-center border border-dove-grey")}
            >
                <Image
                    quality={80}
                    src={iconPath}
                    alt={"button-icon"}
                    width={24}
                    height={24}
                />
            </button>
            {
                label
                &&
                <Typography
                    variant={"body"}
                >
                    {label}
                </Typography>
            }
        </div>
    )
}