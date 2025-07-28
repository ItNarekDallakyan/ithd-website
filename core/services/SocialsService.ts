import {Helpers} from "@common/helpers";

export class SocialsService {
    static shareWithTwitter = (url: string) => {
        return Helpers.urlOpen(`https://twitter.com/share?url=${url}`, "_blank");
    }

    static shareWithReddit = (url: string) => {
        return Helpers.urlOpen(`https://www.reddit.com/submit?url=${url}`, "_blank");
    }

    static shareWithPinterest = (url: string, media: string) => {
        return Helpers.urlOpen(`https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=`, "_blank");
    }

    static shareWithWhatsapp = (text: string) => {
        return Helpers.urlOpen(`https://wa.me/send?text=${text}`, "_blank");
    }
}