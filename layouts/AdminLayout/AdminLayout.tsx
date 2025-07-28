import {FC, ReactNode} from "react";

interface AdminLayoutModel {
    children: ReactNode
}

export const AdminLayout: FC<AdminLayoutModel> = (
    {
        children
    }
) => {
    return (
        <div>
            <div className={"py-16"}>
                {children}
            </div>
        </div>
    )
}