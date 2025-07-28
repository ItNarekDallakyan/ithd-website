import {FC, ReactNode} from "react";

interface FormLayoutModel {
    children: ReactNode
}

export const FormLayout: FC<FormLayoutModel> = (
    {
        children
    }
) => {
    return (
        <div className={"grid grid-cols-1 gap-3"}>
            {children}
        </div>
    )
}