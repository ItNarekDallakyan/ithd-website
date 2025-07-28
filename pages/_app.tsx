import type {AppProps} from "next/app";
import "@styles/main.scss";
import {wrapper} from "@core/store";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import Preloader from "@ui/Preloader";
import {Helpers} from "@common/helpers";
import {LocalizationsContext} from "@core/context";
import {LOCALIZATIONS} from "@common/database/localizations";
import {useRouter} from "next/router";
import Script from "next/script";
import CookiesAcceptComponent from "@components/CookiesAcceptComponent";
import {ROUTES} from "@models/enums";
import Head from "next/head";

const MessagesComponent = dynamic(() => import("@components/MessagesComponent"), {
    ssr: false
});

const AppPage = ({Component, pageProps}: AppProps) => {

    let router = useRouter();

    let [isLoading, setLoading] = useState<boolean>(true);

    const globalConfig = () => {
        setLoading(false);
    }

    const handleRouteChangeComplete = () => {
        setLoading(false);
        Helpers.scrollToTop();
    }

    const handleRouteChangeStart = () => setLoading(true);

    const routingConfig = () => {
        if (router.pathname.includes(ROUTES.BLOG)) return;
        router.events.on("routeChangeStart", handleRouteChangeStart);
        router.events.on("routeChangeComplete", handleRouteChangeComplete);
        router.events.on("routeChangeError", handleRouteChangeComplete);
        return () => {
            router.events.off("routeChangeStart", handleRouteChangeStart);
            router.events.off("routeChangeError", handleRouteChangeComplete);
            router.events.off("routeChangeComplete", handleRouteChangeComplete);
        }
    }

    useEffect(() => {
        globalConfig();
    }, []);

    useEffect(() => {
        routingConfig()
    }, [router.events]);

    return (
        <>
            <Script id={"google-load"} strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-TLRHF4LYGN`}/>
            <Script id={"google-datalayer-load"} strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-TLRHF4LYGN');
                `}
            </Script>
            <Script
                id={"schema"}
                defer
                type="application/ld+json"
                strategy="lazyOnload"
            >
                {`
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "ITHD",
                    "alternateName": "ITHD Digital Agency",
                    "url": "https://ithd.org",
                    "logo": "https://ithd.org/images/logo.svg",
                    "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1 914 904 7784",
                    "contactType": "customer service",
                    "contactOption": "TollFree",
                    "areaServed": "US",
                    "availableLanguage": "en"
                },
                    "sameAs": [
                    "https://twitter.com/ITHDLLC",
                    "https://www.youtube.com/channel/UC8Q9bKPu9D8qtnC1klJGvIg",
                    "https://www.linkedin.com/company/ithd/",
                    "https://www.pinterest.com/ithdagency/",
                    "https://ithd.org"
                    ]
                `}
            </Script>
            <Head>
                <script src="//code.tidio.co/lkhibvi9lqnvjdnw3n6puhykkccrugee.js" async></script>
            </Head>
            <LocalizationsContext.Provider value={{
                localizations: LOCALIZATIONS
            }}>
                {isLoading && <Preloader isLoading/>}
                <MessagesComponent/>
                <Component {...pageProps} />
                <CookiesAcceptComponent/>
            </LocalizationsContext.Provider>
        </>
    )
}

export default wrapper.withRedux(AppPage);
