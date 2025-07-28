import React, {ChangeEvent, FC} from "react";
import styles from "./Select.module.scss";
import cs from "classnames";

interface SelectModel {
    options: any[],
    value: string | null,
    className?: string,
    keyName: string,
    labelName: string,
    name: string,
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void,
    label?: string,
    error?: any
}

export const Select: FC<SelectModel> = (
    {
        options,
        className,
        value,
        keyName,
        labelName,
        onChange,
        name,
        label,
        error
    }
) => {
    return (
        <div
            className={cs({
                [className as string]: className
            }, "p-relative w-full flex flex-col items-start gap-1")}>
            <select
                name={name}
                onChange={onChange}
                className={cs(styles.Select, "w-full appearance-none text-dove-grey rounded-xl cursor-pointer bg-spring border-0 focus:outline-0 p-3")}
                value={value || ""}
            >
                <option value={""} disabled>{label || "Choose here"}</option>
                {
                    options.map((option) => {
                        return (
                            <option
                                key={option[keyName]}
                                value={option[keyName]}
                            >
                                {option[labelName]}
                            </option>
                        )
                    })
                }
            </select>
            {error && <p className={"text-sm text-pink font-medium"}>{error}</p>}
        </div>
    )
}