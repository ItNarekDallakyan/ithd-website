import {FC, MouseEvent, useContext} from "react";
import Typography from "@ui/Typography";
import Image from "next/image";
import FooterListComponent from "@components/FooterComponent/FooterListComponent";
import {FOOTER_ROUTES, ROUTING_ROUTES, SOCIALS, WHATSAPP} from "@common/database";
import {Helpers} from "@common/helpers";
import SocialItem from "@components/FooterComponent/SocialItem";
import cs from "classnames";
import {useRouter} from "next/router";
import Link from "next/link";
import {ROUTES} from "@models/enums";
import {LocalizationsContext} from "@core/context";
import WhatsappIcon from "@assets/icons/WhatsappIcon";
import SocialsList from "@components/FooterComponent/SocialsList";
import {useMainSelector} from "@store/selectors";

interface FooterComponentModel {
    bgColor: string
}

export const FooterComponent: FC<FooterComponentModel> = (
    {
        bgColor
    }
) => {

    const {currentLanguage} = useMainSelector();

    let router = useRouter();
    let {localizations} = useContext(LocalizationsContext);

    let links = ROUTING_ROUTES.concat(FOOTER_ROUTES);
    let currentYear = Helpers.getFullYear();

    let {
        phone,
        email
    } = localizations[currentLanguage].partner;

    let {
        label,
        privacy,
        terms
    } = localizations[currentLanguage].footer;

    const handleTermsRedirect = () => router.push(ROUTES.TERMS,
        undefined,
        {shallow: true}
    );
    const handlePrivacyRedirect = () => router.push(ROUTES.PRIVACY,
        undefined,
        {shallow: true}
    );
    const handleMainRedirect = () => router.push(ROUTES.MAIN,
        undefined,
        {shallow: true}
    );

    const handleSocialRedirect = (event: MouseEvent<HTMLLIElement>) => Helpers.socialRedirect(event);

    return (
        <footer className={cs({
            [`bg-${bgColor}`]: bgColor
        }, "w-full h-full py-10 max-lg:py-5")}>
            <div className={"container mx-auto flex flex-col gap-7 max-xl:gap-5"}>
                <div className={"flex flex-col items-start gap-5"}>
                    <Image
                        title={"ITHD Logo"}
                        onClick={handleMainRedirect}
                        className={"cursor-pointer"}
                        src={"/images/logo.svg"}
                        alt={"logo"}
                        width={60}
                        height={50}
                    />
                    <Typography
                        className={"text-dove-grey"}
                        variant={"body"}
                    >
                        {label}
                    </Typography>
                </div>
                <div className={"w-full flex items-center justify-between max-xl:items-start max-xl:justify-start max-xl:gap-20 max-sm:gap-14"}>
                    <ul className={"flex gap-10 max-xl:flex-col max-xl:gap-4"}>
                        <FooterListComponent
                            links={links}
                        />
                    </ul>
                    <div className={"flex items-center gap-5 max-xl:flex-col max-xl:items-start max-xl:gap-4"}>
                        <SocialItem
                            hoverType={"opacity"}
                            onClick={handleSocialRedirect}
                            dataValue={WHATSAPP}
                        >
                            <WhatsappIcon
                                width={"30"}
                                height={"30"}
                                fill={"#26D366"}
                            />
                        </SocialItem>
                        <a
                            target={"_self"}
                            href={"tel:+971588923283"}
                            className={"tracking-wider text-sm sm:text-base font-medium text-dark whitespace-nowrap transition-all hover:opacity-75 cursor-pointer"}
                        >
                            {phone.value}
                        </a>
                        <a
                            href={`mailto:${email.value}`}
                            className={"font-medium text-sm sm:text-base text-dark whitespace-nowrap transition-all hover:opacity-75 cursor-pointer"}
                        >
                            {email.value}
                        </a>
                    </div>
                </div>
                <div
                    className={"flex items-center justify-between max-xl:flex-col-reverse max-xl:items-start"}
                >
                    <ul className={"flex gap-5 max-sm:gap-3 flex-wrap"}>
                        <li>
                            <Typography
                                className={"whitespace-nowrap text-dove-grey"}
                                variant={"body"}
                            >
                                {currentYear} ITHD
                            </Typography>
                        </li>
                        <li className={"hover:opacity-75 transition-all cursor-pointer"}>
                            <Typography
                                onClick={handlePrivacyRedirect}
                                className={"whitespace-nowrap text-dove-grey"}
                                variant={"body"}
                            >
                                {privacy}
                            </Typography>
                        </li>
                        <li className={"hover:opacity-75 transition-all cursor-pointer"}>
                            <Typography
                                onClick={handleTermsRedirect}
                                className={"whitespace-nowrap text-dove-grey"}
                                variant={"body"}
                            >
                                {terms}
                            </Typography>
                        </li>
                    </ul>
                    <SocialsList
                        className={"max-xl:mb-5 gap-5 max-xl:gap-3"}
                    />
                </div>
                <Typography
                    className={"text-dove-grey md:w-1/2"}
                    variant={"body"}
                >
                    By using our site, you acknowledge that you have read and understand our <Link href={ROUTES.PRIVACY} className={"text-matisse underline"}>Privacy and Cookie Policy</Link>. All trademarks listed on this website are the property of their respective owners. All rights reserved. <br /> Copyright © 2025 ITHD
                </Typography>
            </div>
        </footer>
    )
}