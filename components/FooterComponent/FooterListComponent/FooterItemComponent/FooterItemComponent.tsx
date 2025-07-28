import {FC} from "react";
import Typography from "@ui/Typography";
import {MenuRouteModel} from "@models/interfaces";
import {useRouter} from "next/router";
import {Helpers} from "@common/helpers";

interface FooterItemComponentModel {
    link: MenuRouteModel
}

export const FooterItemComponent: FC<FooterItemComponentModel> = (
    {
        link
    }
) => {

    let router = useRouter();

    let {path, label} = link;

    const handleRedirect = async () => {
        Helpers.blogStorageDataCleanerHelper();
        router.push(path,
            undefined,
            {shallow: true}
        );
    }

    return (
        <li
            onClick={handleRedirect}
            className={"hover:opacity-75 transition-all cursor-pointer"}
        >
            <Typography
                weight={"medium"}
                variant={"body"}
            >
                {label}
            </Typography>
        </li>
    )
}