import {FC, useCallback, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {BreadcrumbLinkModel} from "@models/interfaces";
import ArrayListProvider from "@hoc/ArrayListProvider";
import LinkItem from "@ui/Breadcrumbs/LinkItem";
import cs from "classnames";

interface BreadcrumbsModel {
    title?: string,
    className?: string
}

export const Breadcrumbs: FC<BreadcrumbsModel> = (
    {
        title,
        className
    }
) => {

    let router = useRouter();

    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbLinkModel[]>([]);

    const generateBreadcrumbs = useCallback(() => {
        const asPathWithoutQuery = router.asPath.split("?")[0];

        const asPathNestedRoutes = asPathWithoutQuery.split("/")
            .filter(v => v.length > 0);

        const breadcrumbsList = asPathNestedRoutes.map((subpath, idx) => {
            let currentPageItemCondition = idx + 1 == asPathNestedRoutes.length;
            const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
            let titleValue = subpath.charAt(0).toUpperCase() + subpath.slice(1, subpath.length);

            if (currentPageItemCondition && title) {
                titleValue = title;
            }

            return {
                href,
                text: titleValue
            };
        })

        return [{ href: "/", text: "Home" }, ...breadcrumbsList];
    },[]);

    const setBreadcrumbsHandler = () => {
        let breadcrumbs = generateBreadcrumbs();
        setBreadcrumbs(breadcrumbs);
    }

    useEffect(() => {
        setBreadcrumbsHandler();
    },[]);

    return (
        <ArrayListProvider array={breadcrumbs}>
            <ul className={cs({
                [className as string]: className
            }, "flex items-center gap-2 flex-wrap")}>
                {
                    breadcrumbs?.map((link, index) => {
                        let {href} = link;

                        const isLastLink = breadcrumbs.length === index + 1;

                        return (
                            <LinkItem
                                isLastLink={isLastLink}
                                key={href}
                                data={link}
                            />
                        )
                    })
                }
            </ul>
        </ArrayListProvider>
    )
}