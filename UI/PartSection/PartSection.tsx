import {FC, ReactNode} from "react";
import cs from "classnames";

interface PartSectionModel {
    children: ReactNode,
    className?: string,
    shadowColor: string,
    containerClassName?: string
}

export const PartSection: FC<PartSectionModel> = (
    {
        children,
        className,
        shadowColor,
        containerClassName
    }
) => {
    return (
        <div className={cs({
            [containerClassName as string]: containerClassName
        },"w-full h-full relative")}>
            <div className={cs({
                [`bg-${shadowColor}`]: shadowColor
            },"ms-auto rounded-tl-3xl p-7 w-11/12")}></div>
            <div className={cs({
                [`bg-${shadowColor}`]: shadowColor
            }, "w-full")}>
                <div
                    className={cs({
                        [className as string]: className
                    },"top-10 py-7 px-40 max-sm:p-5 z-10 md:w-11/12 left-0 bg-orange rounded-r-2xl")}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}