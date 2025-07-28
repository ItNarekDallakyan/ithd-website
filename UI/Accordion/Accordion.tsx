import {FC, ReactNode, useState} from "react";
import styles from "./Accordion.module.scss";
import cs from "classnames";
import CrossIcon from "@assets/icons/CrossIcon";
import Typography from "@ui/Typography";

interface AccordionModel {
    title: string,
    children: ReactNode,
    className?: string,
    iconFill?: string,
    activeClassName?: string,
    isInitialShow?: boolean
}

export const Accordion: FC<AccordionModel> = (
    {
        title,
        className,
        children,
        iconFill,
        activeClassName,
        isInitialShow
    }
) => {

    let [isShow, setShow] = useState<boolean>(isInitialShow || false);

    const handleShow = () => setShow(!isShow);

    return (
        <div
            aria-checked={isShow}
            className={cs(
                {
                    [styles.Accordion]: true,
                    [className as string]: className,
                    [activeClassName as string]: activeClassName && isShow
                }
                , "rounded-2xl bg-mercury")}

        >
            <div
                className={cs({
                    [styles.Accordion__header]: true
                }, "w-full flex items-center justify-between cursor-pointer py-3 px-6")}
                onClick={handleShow}
            >
                <Typography
                    className={"text-base font-bold sm:text-xl"}
                    variant={"h3"}
                >
                    {title}
                </Typography>
                <div className={cs(styles.Accordion__cross, "transition-all duration-300")}>
                    <CrossIcon fill={iconFill || "#f9bf6f"}/>
                </div>
            </div>
            <div
                dangerouslySetInnerHTML={{__html: children as any}}
                className={cs({
                [styles.Accordion__content]: isShow,
                ["py-2"]: isShow
            }, "duration-300 h-0 overflow-hidden opacity-0 px-6 text-dove-grey")}></div>
        </div>
    )
}