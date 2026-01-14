import {FC, MouseEvent} from "react";
import SocialItem from "@components/FooterComponent/SocialItem";
import {SOCIALS, WHATSAPP} from "@common/database";
import RedditIcon from "@assets/icons/RedditIcon";
import LinkedInIcon from "@assets/icons/LinkedInIcon";
import TwitterIcon from "@assets/icons/TwitterIcon";
import YoutubeIcon from "@assets/icons/YoutubeIcon";
import DribbbleIcon from "@assets/icons/DribbbleIcon";
import PinterestIcon from "@assets/icons/PinterestIcon";
import {Helpers} from "@common/helpers";
import cs from "classnames";
import WhatsappIcon from "@assets/icons/WhatsappIcon";

interface SocialsListModel {
    className?: string,
    isWhatsapp?: boolean
}

export const SocialsList: FC<SocialsListModel> = (
    {
        className,
        isWhatsapp
    }
) => {

    const handleSocialRedirect = (event: MouseEvent<HTMLLIElement>) => Helpers.socialRedirect(event);

    return (
        <ul className={cs({
            [className as string]: className
        }, "flex items-center max-xl:flex-wrap max-xl:w-full")}>
            {
                isWhatsapp
                &&
                <SocialItem
                    onClick={handleSocialRedirect}
                    dataValue={WHATSAPP}
                >
                    <WhatsappIcon/>
                </SocialItem>
            }
            <SocialItem
                onClick={handleSocialRedirect}
                dataValue={SOCIALS.REDDIT}
            >
                <RedditIcon/>
            </SocialItem>
            <SocialItem
                onClick={handleSocialRedirect}
                dataValue={SOCIALS.LINKEDIN}
            >
                <LinkedInIcon/>
            </SocialItem>
            <SocialItem
                onClick={handleSocialRedirect}
                dataValue={SOCIALS.TWITTER}
            >
                <TwitterIcon/>
            </SocialItem>
            <SocialItem
                onClick={handleSocialRedirect}
                dataValue={SOCIALS.YOUTUBE}
            >
                <YoutubeIcon/>
            </SocialItem>
            <SocialItem
                onClick={handleSocialRedirect}
                dataValue={SOCIALS.DRIBBBLE}
            >
                <DribbbleIcon/>
            </SocialItem>
            <SocialItem
                onClick={handleSocialRedirect}
                dataValue={SOCIALS.PINTEREST}
            >
                <PinterestIcon/>
            </SocialItem>
        </ul>
    )
}