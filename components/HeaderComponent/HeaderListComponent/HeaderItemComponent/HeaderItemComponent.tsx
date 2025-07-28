import React, {FC, memo, ReactNode, useState} from "react";
import styles from "./HeaderItemComponent.module.scss";
import {useRouter} from "next/router"
import cs from "classnames";
import {Helpers} from "@common/helpers";
import {DropdownListItemModel} from "@models/interfaces";

interface HeaderItemComponentModel {
    path: string,
    children: ReactNode,
    childrenClassName?: string,
    list: DropdownListItemModel[]
}


export const HeaderItemComponent: FC<HeaderItemComponentModel> = memo((
    {
        path,
        children,
        childrenClassName,
        list
    }
) => {

    const router = useRouter();

    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const handleDropdownOpen = () => {
        // if (list.length) return setDropdownOpen(true);
        handleRedirect();
    }

    const isActivePage = path === router.pathname;

    const handleRedirect = () => {
        Helpers.blogStorageDataCleanerHelper();
        router.push(path, undefined, {shallow: true});
    };

    return (
        <>
            {/*<div className={cs({*/}
            {/*    ["opacity-100 visible"]: isDropdownOpen,*/}
            {/*    ["opacity-0 invisible"]: !isDropdownOpen*/}
            {/*}, "transition-all duration-700 absolute left-0 z-50 top-[75px] right-0")}>*/}
            {/*    <DropdownList*/}
            {/*        setDropdownOpen={setDropdownOpen}*/}
            {/*        list={list}*/}
            {/*    />*/}
            {/*</div>*/}
            <li
                data-dropdown={"dropdown"}
                className={cs({
                    [styles.HeaderItemComponent]: true,
                    ["after:opacity-100"]: isActivePage
                }, "font-medium transition-all relative flex items-center after:opacity-0 after:bg-cover after:absolute lg:hover:after:opacity-100")}
                onClick={handleDropdownOpen}
            >
            <span className={cs({
                [childrenClassName as string]: childrenClassName,
                ["text-orange"]: isDropdownOpen
            }, "2xl:text-xl cursor-pointer max-lg:text-3xl")}>{children}</span>
            </li>
        </>
    )
});

HeaderItemComponent.displayName = "HeaderItemComponent";
