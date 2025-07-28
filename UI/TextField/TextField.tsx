import {ChangeEvent, FC, FocusEvent, KeyboardEvent} from "react";
import cs from "classnames";
import Typography from "@ui/Typography";
import ErrorMessage from "@ui/Messages/ErrorMessage";

interface TextFieldModel {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean,
    name: string,
    placeholder?: string,
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void,
    containerClassName?: string,
    value: string,
    maxLength?: number,
    type?: string,
    error?: any,
    autoComplete?: string,
    inputClassName?: string,
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void,
    onBlur?: any,
    label?: string
}

export const TextField: FC<TextFieldModel> = (
    {
        onChange,
        value,
        disabled,
        name,
        placeholder,
        onKeyPress,
        containerClassName,
        maxLength,
        type,
        error,
        autoComplete,
        inputClassName,
        onFocus,
        onBlur,
        label
    }
) => {

    let id = `textfield-${name}`;

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        let {which} = event;

        if (value.length === maxLength && which != 8) event.preventDefault();
    }

    return (
        <div className={cs({
            [containerClassName as string]: containerClassName
        }, "w-full flex items-start gap-1 flex-col")}>
            {
                label
                &&
                <Typography
                    variant={"body"}
                >
                    {label}
                </Typography>
            }
            <input
                onFocus={onFocus}
                onBlur={onBlur}
                className={cs({
                    [inputClassName as string]: inputClassName
                }, "font w-full flex-grow p-3 bg-spring text-dove-grey rounded-xl focus:outline-0")}
                autoComplete={autoComplete}
                value={value}
                maxLength={maxLength}
                id={id}
                onKeyDown={handleKeyDown}
                onKeyPress={onKeyPress}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                type={type || "text"}
                onChange={onChange}
            />
            <ErrorMessage
                error={error}
            />
        </div>
    )
}