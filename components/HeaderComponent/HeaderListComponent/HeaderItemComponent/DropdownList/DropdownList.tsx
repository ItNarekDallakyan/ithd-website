import {Dispatch, FC, memo, useEffect} from "react";
import {DropdownListItemModel} from "@models/interfaces";
import DropdownItem
    from "@components/HeaderComponent/HeaderListComponent/HeaderItemComponent/DropdownList/DropdownItem";

interface DropdownListModel {
    list: DropdownListItemModel[],
    setDropdownOpen: Dispatch<boolean>
}

export const DropdownList: FC<DropdownListModel> = memo((
    {
        list,
        setDropdownOpen
    }
) => {

    const handleCloseDropdown = (event: any) => {
        let element = (event.target as any);
        let parent = element.closest("[data-dropdown]");
        if (!parent) setDropdownOpen(false);
    }

    useEffect(() => {
        window.addEventListener("click", handleCloseDropdown);
        return () => window.removeEventListener("click", handleCloseDropdown);
    }, []);

    return (
        <div
            data-dropdown={"dropdown"}
            className={"bg-white shadow-lg rounded-3xl grid grid-cols-3 p-3"}
        >
            {
                list.length
                    ?
                    list.map((item, index) => {
                        return (
                            <DropdownItem
                                setDropdownOpen={setDropdownOpen}
                                item={item}
                                key={index}
                            />
                        )
                    })
                    :
                    null
            }
        </div>
    )
});

DropdownList.displayName = "DropdownList";