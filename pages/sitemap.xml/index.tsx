import {FC} from "react";
import {GetServerSidePropsContext} from "next";
import {BLOG_POSTS} from "@common/database/blog";

const SitemapXML: FC = () => {
    return null;
};

function generateSiteMap(paths: string[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
   >
   <url>
        <loc>https://ithd.ae/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/blog/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/company/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/testimonies/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/business-automation-app/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/faq/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/our-process/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/partner/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/privacy-policy/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/services/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/terms/</loc>
    </url>
    <url>
        <loc>https://ithd.ae/services/web-development/</loc>
        <video:video>
            <video:title>Website development</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/og-image.jpg/</video:thumbnail_loc>
            <video:description>Our skilled team specializes in creating websites that excel in all areas. We optimize them for search engines to ensure high visibility for potential customers. Our designs prioritize user-friendly navigation, making it easy for visitors to find what they need.</video:description>
            <video:content_loc>https://www.youtube.com/embed/4PhnMu2kMxo?si=AtP6qTbtm7X5Sc3F/</video:content_loc>
            <video:player_loc>https://www.youtube.com/embed/4PhnMu2kMxo?si=AtP6qTbtm7X5Sc3F/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/services/cloud-solutions/</loc>
        <video:video>
            <video:title>Cloud Solutions</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/og-image.jpg/</video:thumbnail_loc>
            <video:description>Efficient and client-focused, our process ensures a smooth journey from concept to completion. We analyze, design, implement, and collaborate closely with you to achieve exceptional results.</video:description>
            <video:content_loc>https://www.youtube.com/embed/Av2NhA96kxM?si=tHxcucQ0zaBy5m4x/</video:content_loc>
            <video:player_loc>https://www.youtube.com/embed/Av2NhA96kxM?si=tHxcucQ0zaBy5m4x/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/services/ux-ui-design/</loc>
        <video:video>
            <video:title>UX/UI Design</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/og-image.jpg/</video:thumbnail_loc>
            <video:description>Our team of experienced designers will work closely with you to understand your brand
                and target audience and create a custom design that reflects your unique identity.
            </video:description>
            <video:content_loc>https://www.youtube.com/embed/3HvEJJT7bqo?si=POIU7g06BMPsQcFq/</video:content_loc>
            <video:player_loc>https://www.youtube.com/embed/3HvEJJT7bqo?si=POIU7g06BMPsQcFq/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/services/ios-development/</loc>
        <video:video>
            <video:title>iOS development</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/og-image.jpg/</video:thumbnail_loc>
            <video:description>We specialize in crafting exceptional iOS applications that bring your digital vision to life. Our team of experienced iOS developers is dedicated to delivering cutting-edge, user-centric mobile solutions for the iOS platform. Whether you need a feature-rich iPhone app or a powerful iPad application, we have the expertise and creativity to turn your ideas into a reality.</video:description>
            <video:content_loc>https://www.youtube.com/embed/u07Slf7XLaY?si=M0l_X05SD01XFmBJ/</video:content_loc>
            <video:player_loc>https://www.youtube.com/embed/u07Slf7XLaY?si=M0l_X05SD01XFmBJ/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/services/android-development/</loc>
        <video:video>
            <video:title>Android development</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/og-image.jpg/</video:thumbnail_loc>
            <video:description>At the core of successful Android app development lies a set of principles that ensure your application not only meets your specific requirements but also thrives in a rapidly evolving landscape.</video:description>
            <video:content_loc>https://www.youtube.com/embed/C9-5Rp8tz1U?si=ZVGmQQHJ0P03sQFX/</video:content_loc>
            <video:player_loc>https://www.youtube.com/embed/C9-5Rp8tz1U?si=ZVGmQQHJ0P03sQFX/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/services/logo-making/</loc>
        <video:video>
            <video:title>Logo making</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/og-image.jpg/</video:thumbnail_loc>
            <video:description>Our logo design service offers tailored visual identities for your brand. Our creative team crafts unique logos that capture your brand's essence and leave a lasting impression. From concept to final design, we ensure your logo communicates your brand's story and values, enhancing your overall identity.</video:description>
            <video:content_loc>https://www.youtube.com/embed/3HvEJJT7bqo?si=1Nu48kpqKP7AF9lb/</video:content_loc>
            <video:player_loc>https://www.youtube.com/embed/3HvEJJT7bqo?si=1Nu48kpqKP7AF9lb/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/services/business-automation/</loc>
        <video:video>
            <video:title>Crypto Wallet Apps</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/og-image.jpg/</video:thumbnail_loc>
            <video:description>At ITHD, we understand the importance of building strong relationships with customers.</video:description>
            <video:content_loc>https://www.youtube.com/embed/0v6pznz-QAg?si=TKRavJdShfU4Ontu/</video:content_loc>
            <video:player_loc>https://www.youtube.com/embed/0v6pznz-QAg?si=TKRavJdShfU4Ontu/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/pms-for-mobile/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/pms-for-mobile/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/pms-for-mobile/2.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/pms-for-mobile/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/pms-for-mobile/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.aee/images/works/pms-for-mobile/5.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/pms-for-mobile/6.jpg/</image:loc>
        </image:image>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/crypto-wallet/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/crypto-app/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/crypto-app/2.jpg/</image:loc>
        </image:image>
        <video:video>
            <video:title>Mobile Crypto wallet</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/works/crypto-app/2.jpg/</video:thumbnail_loc>
            <video:description>Crypto wallet app is a secure and user-friendly platform for managing and transferring
                cryptocurrencies.
            </video:description>
            <video:content_loc>https://ithd.ae/videos/crypto-app-movie.mp4/</video:content_loc>
            <video:player_loc>https://ithd.ae/videos/crypto-app-movie.mp4/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/furniture-repairs-website/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/furniture-repairs-admin-portal/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/furniture-repairs-admin-portal/2.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/furniture-repairs-admin-portal/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/furniture-repairs-admin-portal/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/furniture-repairs-website/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/furniture-repairs-website/2.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/furniture-repairs-website/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/furniture-repairs-website/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/furniture-repairs-website/5.jpg/</image:loc>
        </image:image>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/business-automation/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/business-automation/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/business-automation/2.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/business-automation/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/business-automation/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/business-automation/5.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/business-automation/6.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/business-automation/7.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/business-automation/8.jpg/</image:loc>
        </image:image>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/banking-mobile-app/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/banking-mobile-app/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/banking-mobile-app/2.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/banking-mobile-app/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/banking-mobile-app/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/banking-mobile-app/5.jpg/</image:loc>
        </image:image>
        <video:video>
            <video:title>Banking Mobile App</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/works/banking-mobile-app/5.jpg/</video:thumbnail_loc>
            <video:description>We are proud to announce that we have completed the development of a new banking mobile
                app for our client.
            </video:description>
            <video:content_loc>https://ithd.ae/videos/banking-mobile-app-movie.mp4/</video:content_loc>
            <video:player_loc>https://ithd.ae/videos/banking-mobile-app-movie.mp4/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/design/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/design/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/design/2.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/design/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/design/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/design/5.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/design/6.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/design/7.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/design/8.jpg/</image:loc>
        </image:image>
        <video:video>
            <video:title>Our Completed UI/UX Job for Activity Tracking</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/works/design/8.jpg/</video:thumbnail_loc>
            <video:description>We are proud to announce that we have completed the development of a new activity
                tracking mobile app.
            </video:description>
            <video:content_loc>https://ithd.ae/videos/design-work-second-movie.mp4/</video:content_loc>
            <video:player_loc>https://ithd.ae/videos/design-work-second-movie.mp4/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/crypto-app/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/cryptocurrency/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/cryptocurrency/2.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/cryptocurrency/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/cryptocurrency/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/cryptocurrency/5.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/cryptocurrency/6.jpg/</image:loc>
        </image:image>
        <video:video>
            <video:title>Crypto app</video:title>
            <video:thumbnail_loc>https://ithd.ae/images/works/cryptocurrency/6.jpg/</video:thumbnail_loc>
            <video:description>If you are looking for a convenient, secure, and efficient way to use cryptocurrencies,
                then a cryptocurrency app is a great option.
            </video:description>
            <video:content_loc>https://ithd.ae/videos/work-example-movie.mp4/</video:content_loc>
            <video:player_loc>https://ithd.ae/videos/work-example-movie.mp4/</video:player_loc>
        </video:video>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/mobile-app-development/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/mobile-app-development/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/mobile-app-development/2.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/mobile-app-development/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/mobile-app-development/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/mobile-app-development/5.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/mobile-app-development/6.jpg/</image:loc>
        </image:image>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/chat-application/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/chat-app/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/chat-app/2.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/chat-app/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/chat-app/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/chat-app/5.jpg/</image:loc>
        </image:image>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/mobile-loan-app/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/loan-banking-app/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/loan-banking-app/2.jpg/</image:loc>
        </image:image>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/mobile-app-design/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/mobile-app-design/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/mobile-app-design/2.jpg/</image:loc>
        </image:image>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/tobacco-branding/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/tobacco-branding/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/tobacco-branding/2.png/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/tobacco-branding/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/tobacco-branding/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/tobacco-branding/5.jpg/</image:loc>
        </image:image>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/beer-work/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/beer-work/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/beer-work/2.png/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/beer-work/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/beer-work/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/beer-work/5.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/beer-work/6.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/beer-work/7.jpg/</image:loc>
        </image:image>
    </url>
    <url>
        <loc>https://ithd.ae/portfolio/logo/</loc>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/1.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/2.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/3.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/4.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/5.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/6.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/7.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/8.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/9.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/10.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/11.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/12.jpg/</image:loc>
        </image:image>
        <image:image>
            <image:loc>https://ithd.ae/images/works/completed-logos/13.jpg/</image:loc>
        </image:image>
    </url>
     ${paths
        .map((path) => {
            return `
       <url>
           <loc>${`https://ithd.ae/blog/${path}/`}</loc>
       </url>
     `;
        })
        .join('')}
   </urlset>
 `;
}

export async function getServerSideProps({res}: GetServerSidePropsContext) {
    const paths = BLOG_POSTS.map(post => post.path);
    const sitemap = generateSiteMap(paths);
    if (res) {
        res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
        res.setHeader('Content-Type', 'text/xml');
        // we send the XML to the browser
        res.write(sitemap);
        res.end();
    }
    return {
        props: {},
    };
}

export default SitemapXML;