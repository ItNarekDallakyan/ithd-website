import React, {FC, memo, ReactNode, Suspense} from "react";
import dynamic from "next/dynamic";
import HTMLHeadProvider from "@hoc/HTMLHeadProvider";
import {PLATFORM_NAME, ROBOTS_CONTENT, WEBSITE_URL} from "@common/variables";
import Breadcrumbs from "@ui/Breadcrumbs";
import cs from "classnames";

export const HeaderComponent = dynamic(() => import("@components/HeaderComponent"), {
    ssr: false
});

export const FooterComponent = dynamic(() => import("@components/FooterComponent"), {
    suspense: true
});

interface MainLayoutModel {
    children: ReactNode,
    background?: string,
    isFooterHided?: boolean,
    footerBgColor: string,
    routeKey?: string,
    title?: string,
    path?: string,
    breadcrumbTitle?: string,
    breadcrumbClassName?: string,
    isBreadcrumbs?: boolean,
    headerBgColor?: string
}

export const MainLayout: FC<MainLayoutModel> = memo((
    {
        children,
        background,
        isFooterHided,
        headerBgColor,
        footerBgColor,
        routeKey,
        title,
        path,
        breadcrumbTitle,
        breadcrumbClassName,
        isBreadcrumbs
    }) => {
    return (
        <>
            <HTMLHeadProvider
                path={path}
                title={title || "ITHD Digital Agency"}
                description={"Full-Service Custom Software Development: Team of expert engineers, creative designers, and skilled developers who deliver customized software solutions."}
                robots={ROBOTS_CONTENT}
                type={"website"}
                locale={"en_US"}
                pageURL={`${WEBSITE_URL}${routeKey}`}
                site_name={PLATFORM_NAME}
                image={"/images/og-image.jpg"}
                imageWidth={"1200"}
                imageHeight={"630"}
            />
            {
                background
                &&
                <style jsx global>
                    {`
                      body {
                        background: ${background};
                      }
                    `}
                </style>
            }
            <HeaderComponent
                background={headerBgColor}
            />
            {
                isBreadcrumbs
                &&
                <Breadcrumbs
                    className={cs("container mx-auto mt-5", breadcrumbClassName)}
                    title={breadcrumbTitle}
                />
            }
            {children}
            {
                !isFooterHided
                    ?
                    <Suspense fallback={""}>
                        <FooterComponent
                            bgColor={footerBgColor}
                        />
                    </Suspense>
                    :
                    null
            }
        </>
    )
});

MainLayout.displayName = "MainLayout";