import {FC} from "react";
import SocialItem from "@components/FooterComponent/SocialItem";
import PinterestIcon from "@assets/icons/PinterestIcon";
import TwitterIcon from "@assets/icons/TwitterIcon";
import RedditIcon from "@assets/icons/RedditIcon";
import {SocialsService} from "@services/SocialsService";
import {Conditions} from "@common/conditions";
import cs from "classnames";
import WhatsappIcon from "@assets/icons/WhatsappIcon";
import {BlogPostModel} from "@models/interfaces";

interface SocialShareBarModel {
    className?: string,
    post: BlogPostModel
}

export const SocialShareBar: FC<SocialShareBarModel> = (
    {
        className,
        post
    }
) => {

    let blogPostPath = Conditions.isWindowLoaded() ? `${window.origin}/blog/${post?.path}` : "";

    const handleShareReddit = () => SocialsService.shareWithReddit(blogPostPath);

    const handleShareTwitter = () => SocialsService.shareWithTwitter(blogPostPath);

    const handleSharePinterest = () => {
        if (!post?.thumbnail) return;
        SocialsService.shareWithPinterest(blogPostPath, post.thumbnail);
    };

    const handleShareWhatsapp = () => {
        if (!post) return;
        let {title} = post;
        let url = window.location.href;
        let text = `${title} ${url}`;
        return SocialsService.shareWithWhatsapp(text);
    };

    return (
        <ul className={cs({
            [className as string]: className
        }, "flex items-center")}>
            <SocialItem onClick={handleShareReddit}>
                <RedditIcon/>
            </SocialItem>
            <SocialItem onClick={handleSharePinterest}>
                <PinterestIcon/>
            </SocialItem>
            <SocialItem onClick={handleShareTwitter}>
                <TwitterIcon/>
            </SocialItem>
            <SocialItem onClick={handleShareWhatsapp}>
                <WhatsappIcon/>
            </SocialItem>
        </ul>
    )
}