import {FC, ReactNode} from "react";
import Spinner from "@ui/Loaders/Spinner";

interface ArrayListProviderModel {
    emptyLabel?: string,
    array: any[] | null,
    children: ReactNode,
    loadingChildren?: ReactNode
}

export const ArrayListProvider: FC<ArrayListProviderModel> = (
    {
        emptyLabel,
        array,
        children,
        loadingChildren
    }
) => {
    return (
        <>
            {
                array
                ?
                array.length
                ?
                children
                :
                <p>{emptyLabel}</p>
                :
                loadingChildren ? loadingChildren : <Spinner isLoading={true} />
            }
        </>
    )
}