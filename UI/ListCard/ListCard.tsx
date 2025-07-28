import {FC, ReactNode} from "react";
import Typography from "@ui/Typography";
import cs from "classnames";
import {CardPropsModel} from "@models/interfaces";
import Image from "next/image";
import {Helpers} from "@common/helpers";

interface ListCardModel extends CardPropsModel {
    topChildren?: ReactNode
}

export const ListCard: FC<ListCardModel> = (
    {
        title,
        description,
        image,
        className,
        onClick,
        topChildren
    }
) => {

    const descriptionValue = Helpers.extractHTMLContent(description, true);

    return (
        <div className={cs({
            [className as string]: className
        }, "justify-between transition-all group duration-300 bg-white rounded-3xl p-7 flex items-center gap-12 max-lg:flex-col-reverse max-lg:gap-5 max-lg:items-start max-lg:p-5")}>
            <div className={"lg:max-w-[80%] flex items-start gap-3 flex-col max-lg:gap-1"}>
                {topChildren}
                <Typography
                    className={"cursor-pointer group-hover:text-orange transition-colors"}
                    onClick={onClick}
                    variant={"h2"}
                >
                    {title}
                </Typography>
                <div
                    className={"break-words"}
                    dangerouslySetInnerHTML={{__html: descriptionValue || ""}}
                ></div>
            </div>
            <div className={"max-lg:w-full"}>
                {
                    image
                    ?
                    <Image
                        loading={"eager"}
                        quality={80}
                        priority
                        title={title}
                        width={300}
                        height={200}
                        alt={title}
                        className={"w-[300px] h-[200px] min-w-[300px] object-cover rounded-xl max-lg:w-full max-lg:min-w-full"}
                        src={image}
                    />
                    :
                    null
                }
            </div>
        </div>
    )
}