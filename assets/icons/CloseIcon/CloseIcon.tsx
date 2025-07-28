import {FC} from "react";
import {VectorIconModel} from "@models/interfaces";

export const CloseIcon: FC<VectorIconModel> = ({fill}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke={fill || "#F9BF6F"} strokeWidth="1">
            <line x1="1.4" y1="1.4" x2="14.4" y2="14.4"></line>
            <line x1="1.4" y1="14.4" x2="14.4" y2="1.4"></line>
        </svg>
    )
}