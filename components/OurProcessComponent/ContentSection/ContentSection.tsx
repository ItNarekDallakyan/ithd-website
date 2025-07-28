import {FC} from "react";
import Typography from "@ui/Typography";

interface ContentSectionModel {
    title: string,
    description: string
}

export const ContentSection: FC<ContentSectionModel> = (
    {
        title,
        description
    }
) => {
    return (
        <div className={"py-16"}>
            <div className={"container mx-auto"}>
                <div className={"flex items-start flex-col gap-5"}>
                    <Typography
                        variant={"h1"}
                    >
                        {title}
                    </Typography>
                    <div
                        className={"font-normal text-dove-grey sm:text-xl"}
                        dangerouslySetInnerHTML={{__html: description}}
                    ></div>
                </div>
            </div>
        </div>
    )
}