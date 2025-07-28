import {FC} from "react";
import Typography from "@ui/Typography";

interface TechnologyItemModel {
    title: string,
    content: string,
    image: string
}

export const TechnologyItem: FC<TechnologyItemModel> = (
    {
        title,
        content,
        image
    }
) => {
    return (
        <div className={"p-5 max-xl:p-0 rounded-2xl flex items-center text-center gap-4 flex-col"}>
            <img
                title={"Service technology"}
                alt={"technology"}
                className={"w-[45px] h-[45px]"}
                width={45}
                height={45}
                src={image}
            />
            <div className={"flex flex-col gap-1"}>
                <Typography
                    className={"text-base font-bold sm:text-xl"}
                    variant={"h3"}
                >
                    {title}
                </Typography>
                <div
                    dangerouslySetInnerHTML={{__html: content}}
                    className={"text-dove-grey"}
                ></div>
            </div>
        </div>
    )
}