import {ChangeEvent, Dispatch, FC, ReactNode} from "react";
import cs from "classnames";
import CheckIcon from "@assets/icons/CheckIcon";

interface CheckboxModel {
    label?: ReactNode,
    isChecked: boolean,
    setChecked: Dispatch<boolean>,
    changeCallback?: (checked: boolean) => void
}

export const Checkbox: FC<CheckboxModel> = (
    {
        label,
        isChecked,
        setChecked,
        changeCallback
    }
) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let {checked} = event.target;
        setChecked(checked);
        if (changeCallback) changeCallback(checked);
    }

    return (
        <label className={"flex items-start gap-2"}>
            <div className={"relative"}>
                <input
                    className={cs({
                        ["border-orange bg-orange relative"]: isChecked
                    }, "transition-all duration-500 appearance-none w-[20px] h-[20px] rounded border border-dove-grey outline-none")}
                    onChange={handleChange}
                    type="checkbox"
                    checked={isChecked}
                />
                <div className={cs({
                    ["visible opacity-100"]: isChecked,
                    ["invisible opacity-0"]: !isChecked
                }, "absolute top-[-2px] left-[-1px] transition-all duration-500 top-0")}>
                    <CheckIcon fill={"#212121"} />
                </div>
            </div>
            {
                label
                &&
                <span>{label}</span>
            }
        </label>
    )
}