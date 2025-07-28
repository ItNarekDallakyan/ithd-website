import {FC} from "react";
import {BreadcrumbLinkModel} from "@models/interfaces";
import cs from "classnames";
import Link from "next/link";

interface LinkItemModel {
    data: BreadcrumbLinkModel,
    isLastLink: boolean
}

export const LinkItem: FC<LinkItemModel> = (
    {
        data,
        isLastLink
    }
) => {

    let {text, href} = data;

    return (
        <>
            <li>
                <Link
                    href={href}
                    className={cs({
                        ["hover:bg-dark hover:text-white cursor-pointer transition-colors duration-300"]: !isLastLink,
                        ["cursor-default"]: isLastLink
                    }, "inline-block py-1 px-4 rounded-full text-dark bg-grey")}
                >
                    <div dangerouslySetInnerHTML={{__html: text}}></div>
                </Link>
            </li>
            {
                !isLastLink
                &&
                <li>
                    /
                </li>
            }
        </>
    )
}