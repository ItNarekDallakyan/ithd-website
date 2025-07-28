import {FC, ReactNode} from "react";
import Head from "next/head";
import {WEBSITE_URL} from "@common/variables";
import {Helpers} from "@common/helpers";

interface HTMLHeadProviderModel {
    title: string,
    description: string,
    robots: string,
    type: string,
    locale?: string,
    pageURL: string,
    site_name: string,
    image?: string,
    imageWidth?: string,
    imageHeight?: string,
    children?: ReactNode,
    video?: string,
    path?: string
}

export const HTMLHeadProvider: FC<HTMLHeadProviderModel> = (
    {
        title,
        description,
        robots,
        type,
        locale,
        pageURL,
        site_name,
        image,
        imageWidth,
        imageHeight,
        children,
        video,
        path
    }
) => {

    let canonicalURL = path !== undefined && WEBSITE_URL.concat(Helpers.path(path));

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="robots" content={robots}/>
            <meta property="og:title" content={title}/>
            <meta property="og:locale" content={locale ? locale : "en-US"}/>
            <meta property="og:type" content={type}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={pageURL}/>
            <meta property="og:site_name" content={site_name}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:title" content={title}/>
            <link rel="canonical" href={canonicalURL || WEBSITE_URL} />
            {video && <meta property="og:video:width" content="500" />}
            {video && <meta property="og:video:height" content="300" />}
            {video && <meta property="og:video" content={video} />}
            {image && <meta name="og:image" content={image}/>}
            {imageWidth && <meta property="og:image:width" content={imageWidth}/>}
            {imageHeight && <meta property="og:image:height" content={imageHeight}/>}
            <meta name="p:domain_verify" content="c01281207d8078bfdfd27f0da4b09fc1"/>
            {children}
        </Head>
    )
}