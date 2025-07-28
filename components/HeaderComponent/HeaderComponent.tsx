import React, {FC, memo, useEffect, useState} from "react";
import MatchMediaComponent from "@ui/MatchMediaComponent";
import {Helpers} from "@common/helpers";
import HeaderControl from "@components/HeaderComponent/HeaderControl";
import Image from "next/image";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import cs from "classnames";
import HeaderListComponent from "@components/HeaderComponent/HeaderListComponent";
import ToggleIcon from "@assets/icons/ToggleIcon";

interface HeaderComponentModel {
    background?: string
}

export const HeaderComponent: FC<HeaderComponentModel> = memo((
    {
        background
    }
) => {

    const router = useRouter();

    const [isMenuCollapsed, setMenuCollapsed] = useState<boolean>(false);
    const isHeaderResponsive = Helpers.windowMatchMediaHelper('(max-width: 1024px)');

    const handleChangeMenuCollapsedState = () => setMenuCollapsed(!isMenuCollapsed);

    const handleContactRedirect = () => {
        if (isHeaderResponsive?.matches) setMenuCollapsed(false);
        router.push(ROUTES.CONTACT, undefined, {shallow: true});
    }

    const handleMainRedirect = () => router.push(ROUTES.MAIN, undefined, {shallow: true});

    useEffect(() => {
        if (!isHeaderResponsive?.matches) setMenuCollapsed(true);
    }, [isHeaderResponsive]);

    useEffect(() => {
        if (isMenuCollapsed && isHeaderResponsive?.matches) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "auto";
        }
    }, [isMenuCollapsed, isHeaderResponsive]);

    return (
        <header
            className={cs({
                [background as string]: background,
                ["h-screen bg-dark"]: isMenuCollapsed && isHeaderResponsive?.matches
            }, "py-2 max-lg:py-5 w-full sticky top-0 z-[9999999]")}
        >
            <div className={"lg:flex mx-auto container lg:gap-20 items-center"}>
                <div className={"flex items-center justify-between"}>
                    <Image
                        loading={"lazy"}
                        title={"ITHD Logo"}
                        onClick={handleMainRedirect}
                        className={"max-w-[60px] max-h-[50px] min-w-[60px] max-h-[50px] h-14 cursor-pointer"}
                        alt={"ithd-logo"}
                        src={"/images/logo.svg"}
                        width={60}
                        height={50}
                    />
                    <MatchMediaComponent query={'(max-width: 1024px)'}>
                        <button
                            onClick={handleChangeMenuCollapsedState}
                        >
                            <div className={"w-[30px] h-[30px] flex items-center justify-center"}>
                                <ToggleIcon
                                    fill={"#212121"}
                                />
                            </div>
                        </button>
                    </MatchMediaComponent>
                </div>
                {
                    isMenuCollapsed
                    &&
                    <div
                        className={"w-full justify-between relative flex items-center max-lg:flex-col max-lg:gap-7 max-lg:justify-center max-lg:bg-dark max-lg:fixed max-lg:left-0 max-lg:right-0 max-lg:top-0 max-lg:bottom-0 z-[500]"}>
                        <MatchMediaComponent query={'(max-width: 1024px)'}>
                            <button
                                onClick={handleChangeMenuCollapsedState}
                                className={"absolute right-7 top-9"}
                            >
                                <Image
                                    priority
                                    width={24}
                                    height={24}
                                    src={"/images/close-icon.svg"}
                                    alt={"close-icon"}
                                />
                            </button>
                        </MatchMediaComponent>
                        <ul className={"flex items-center gap-14 max-lg:gap-7 max-lg:flex-col"}>
                            <HeaderListComponent
                                childrenClassName={"text-dark max-lg:text-white max-lg:font-bold"}
                            />
                        </ul>
                        <HeaderControl
                            onContact={handleContactRedirect}
                        />
                    </div>
                }
            </div>
        </header>
    )
});

HeaderComponent.displayName = "HeaderComponent";
