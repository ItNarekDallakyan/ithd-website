import {FC} from "react";
import {MenuRouteModel} from "@models/interfaces";
import FooterItemComponent from "./FooterItemComponent";

interface FooterListComponentModel {
    links: MenuRouteModel[]
}

export const FooterListComponent: FC<FooterListComponentModel> = (
    {
        links
    }
) => {
    return (
        <>
            {
                links.map(link => {
                    let {id} = link;
                    return (
                        <FooterItemComponent
                            link={link}
                            key={id}
                        />
                    )
                })
            }
        </>
    )
}