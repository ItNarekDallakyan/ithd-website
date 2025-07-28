import {Dispatch, FC, memo} from "react";
import {DropdownListItemModel} from "@models/interfaces";
import {useRouter} from "next/router";

interface DropdownItemModel {
    item: DropdownListItemModel,
    setDropdownOpen: Dispatch<boolean>
}

export const DropdownItem: FC<DropdownItemModel> = memo((
    {
        setDropdownOpen,
        item
    }
) => {

    const router = useRouter();

    let {title, content, path} = item;

    const handleRedirect = () => {
        router.push(path);
        setDropdownOpen(false);
    };

    return (
        <div
            onClick={handleRedirect}
            className={"rounded-2xl flex flex-col gap-2 group cursor-pointer p-5 transition-colors duration-500 hover:bg-[#F8F8F8FF]"}
        >
            <div
                className={"text-xl font-medium group-hover:text-orange transition-colors duration-500"}
                dangerouslySetInnerHTML={{__html: title}}
            ></div>
            <div
                className={"text-dove-grey"}
                dangerouslySetInnerHTML={{__html: content}}
            >
            </div>
        </div>
    )
});

DropdownItem.displayName = "DropdownItem";