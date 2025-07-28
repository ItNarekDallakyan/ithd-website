import {FC} from "react";
import cs from "classnames";

interface DividerModel {
    className?: string
}

export const Divider: FC<DividerModel> = ({className}) => {
    return (
        <div className={cs({
            [className as string]: className
        }, "h-[1px] bg-grey w-full")}></div>
    )
}