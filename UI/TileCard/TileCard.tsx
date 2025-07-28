import {FC, MouseEvent} from "react";
import styles from "./TileCard.module.scss";
import cs from "classnames";
import ArrowIcon from "@assets/icons/ArrowIcon";
import {Helpers} from "@common/helpers";

interface TileCardModel {
    title: string,
    description: string,
    onClick: () => void,
    className?: string
}

export const TileCard: FC<TileCardModel> = (
    {
        title,
        description,
        onClick,
        className
    }
) => {

    const handleStopPropagation = (event: MouseEvent<HTMLElement>) => {
        let element = event.target as any;
        let isLink = Helpers.isLinkElement(element.tagName);
        if (isLink) event.stopPropagation();
    }

    return (
        <div
            onClick={onClick}
            className={cs(
                {
                  [className as string]: className
                },
                styles.TileCard,
                "relative cursor-pointer element-shadow-hover bg-spring rounded-3xl p-6 pb-16 hover:bg-blue transition-all"
            )}
        >
            <div className={"flex flex-col items-start gap-3"}>
                <div
                    dangerouslySetInnerHTML={{__html: title}}
                    className={cs(
                        styles.TileCard__text,
                        "transition-colors text-blue text-2xl font-bold sm:text-3xl"
                    )}
                >
                </div>
                <div
                    onClick={handleStopPropagation}
                    className={cs(
                        styles.TileCard__text,
                        styles.TileCard__description,
                        "transition-colors text-dove-grey"
                    )}
                    dangerouslySetInnerHTML={{__html: description}}
                ></div>
            </div>
            <div className={cs(
                styles.TileCard__icon,
                "flex items-end justify-end absolute right-6 bottom-6"
            )}>
                <ArrowIcon fill={"#EDEBE7"} />
            </div>
        </div>
    )
}