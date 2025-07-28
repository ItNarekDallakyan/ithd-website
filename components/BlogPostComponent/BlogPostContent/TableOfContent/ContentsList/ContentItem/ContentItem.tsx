import {FC, MouseEvent} from "react";
import cs from "classnames";
import Link from "next/link";
import {ROUTES} from "@models/enums";
import {useRouter} from "next/router";

interface ContentItemModel {
    onClick: (event: MouseEvent<HTMLLinkElement>) => void,
    content: string,
    index: number,
    V2: boolean
}

export const ContentItem: FC<ContentItemModel> = (
    {
        onClick,
        content,
        index,
        V2
    }
) => {

    let {query} = useRouter();

    return (
        <Link
            href={{
                query: {
                    content
                },
                pathname: `${ROUTES.BLOG}/${query.id}`
            }}
            className={cs({
                ["py-1 px-2 hover:bg-carrara inline-block"]: !V2,
                ["p-3 hover:bg-carrara font-bold"]: V2
            }, "w-full text-dark block cursor-pointer rounded-xl transition-all duration-500")}
            onClick={onClick}
        >
            {index}. {content}
        </Link>
    )
}
