import React, {FC, memo} from "react";
import HeaderItemComponent from "./HeaderItemComponent";
import {ROUTING_ROUTES} from "@common/database";

interface HeaderListComponentModel {
    childrenClassName?: string
}

export const HeaderListComponent: FC<HeaderListComponentModel> = memo((
    {
        childrenClassName
    }
) => {
    return (
        <>
            {
                ROUTING_ROUTES.map((link) => {

                    let {
                        id,
                        path,
                        label,
                        children
                    } = link;

                    return (
                        <HeaderItemComponent
                            key={id}
                            list={children}
                            childrenClassName={childrenClassName}
                            path={path}
                        >
                            {label}
                        </HeaderItemComponent>
                    )
                })
            }
        </>
    )
});

HeaderListComponent.displayName = "HeaderListComponent";
