import {FC} from "react";
import styles from "./ContentSection.module.scss";
import PartSection from "@ui/PartSection";
import cs from "classnames";

interface ContentSectionModel {
    description: string,
    title: string,
    className?: string
}

export const ContentSection: FC<ContentSectionModel> = (
    {
        description,
        title,
        className
    }
) => {
    return (
        <PartSection
            className={cs({
                [styles.ContentSection]: true,
                [className as string]: className
            }, "p-24 max-lg:px-10")}
            shadowColor={"white"}
        >
            <div className={"flex items-start flex-col gap-5"}>
                <div
                    className={"font-normal sm:text-xl"}
                    dangerouslySetInnerHTML={{__html: description}}
                ></div>
            </div>
        </PartSection>
    )
}