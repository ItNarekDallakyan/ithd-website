import {FC} from "react";
import {VectorIconModel} from "@models/interfaces";

export const ToggleIcon: FC<VectorIconModel> = ({fill}) => {
    return (
        <svg
            width="30"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 22"
            fill="none"
            stroke={fill || "#212121"}
            strokeWidth="2.5"
        >
            <path d="M0 11.25h44m-44-10h44m-44 20h44"/>
        </svg>
    )
}