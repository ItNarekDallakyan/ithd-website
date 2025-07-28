import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html lang={"en"}>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#f4de90" />
                <link rel={"icon"} href={"/images/favicon.ico"} type={"image/x-icon"} />
                <meta name="format-detection" content="telephone=yes" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
