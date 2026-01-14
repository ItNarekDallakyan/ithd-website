// pages/_document.tsx (or app/_document.tsx)

import { Head, Html, Main, NextScript } from 'next/document';
import { SERVICES, SOCIALS } from "@common/database";
import { LANGUAGES } from "@models/enums";

export default function Document() {
    // ------------------------------------------------------------
    // Helper to safely clean service descriptions (remove HTML)
    // ------------------------------------------------------------
    const getSafeDescription = (description: any) => {
        if (typeof description === "string" && description.trim().length > 0) {
            return description.replace(/<[^>]*>/g, "").trim();
        }
        return null;
    };

    // ------------------------------------------------------------
    // ORGANIZATION SCHEMA (Google Valid)
    // ------------------------------------------------------------
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',   // FIXED (SoftwareCompany = invalid)
        name: 'ITHD Digital Agency',
        url: 'https://ithd.ae',
        logo: 'https://ithd.ae/images/logo.svg',
        description:
            'Leading software development agency in Dubai – custom web, iOS/Android apps, UX/UI design, cloud solutions, CRM automation & branding.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Dubai Internet City',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            postalCode: '00000',
            addressCountry: 'AE',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+971 58 892 3283',
            contactType: 'Customer Service',
            email: 'info@ithd.ae',
            areaServed: 'AE',
            availableLanguage: ['English', 'Arabic'],
        },
        sameAs: Object.values(SOCIALS),

        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],

        // --------------------------------------------------------
        // SERVICES SCHEMA — 100% Safe, No Empty Values
        // --------------------------------------------------------
        service: SERVICES
            .filter(s => s?.title?.[LANGUAGES.EN])
            .map((s) => {
                const name = getSafeDescription(s.title[LANGUAGES.EN]);
                const description = getSafeDescription(s.shortDescription?.[LANGUAGES.EN]);

                const item: any = {
                    '@type': 'Service',
                    name,
                };

                if (description) item.description = description;

                return item;
            }),
    };

    // ------------------------------------------------------------
    // OPENGRAPH DEFAULTS
    // ------------------------------------------------------------
    const ogDefaults = {
        site_name: 'ITHD Digital Agency',
        locale: 'en_AE',
        type: 'website',
        image: 'https://ithd.ae/images/og-default.jpg',
        imageWidth: '1200',
        imageHeight: '630',
    };

    return (
        <Html lang="en">
            <Head>
                {/* ---------- FAVICON & PWA ---------- */}
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#f4de90" />
                <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
                <meta name="format-detection" content="telephone=yes" />

                {/* ---------- VIEWPORT ---------- */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                {/* ---------- CANONICAL ---------- */}
                <link rel="canonical" href="https://ithd.ae" />

                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:title" content={ogDefaults.site_name} />
                <meta property="og:description" content={organizationSchema.description} />
                <meta property="og:url" content="https://ithd.ae" />
                <meta property="og:site_name" content={ogDefaults.site_name} />
                <meta property="og:locale" content={ogDefaults.locale} />
                <meta property="og:type" content={ogDefaults.type} />
                <meta property="og:image" content={ogDefaults.image} />
                <meta property="og:image:width" content={ogDefaults.imageWidth} />
                <meta property="og:image:height" content={ogDefaults.imageHeight} />

                {/* ---------- TWITTER ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={ogDefaults.site_name} />
                <meta name="twitter:description" content={organizationSchema.description} />
                <meta name="twitter:image" content={ogDefaults.image} />

                {/* ---------- STRUCTURED DATA (JSON-LD) ---------- */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />

                {/* ---------- HREFLANG (FIXED — NO DUPLICATES) ---------- */}
                <link rel="alternate" hrefLang="en" href="https://ithd.ae" />
                <link rel="alternate" hrefLang="ar" href="https://ithd.ae/ar" />
                <link rel="alternate" hrefLang="x-default" href="https://ithd.ae" />
            </Head>

            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}