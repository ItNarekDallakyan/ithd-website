import {Helpers} from "@common/helpers";

export const MatchMediaComponent = (
    {
        children,
        query
    }: any
) => {

    let matchMedia = Helpers.windowMatchMediaHelper(query);

    if (matchMedia && matchMedia.matches) {
        return children;
    }

    return null;
}