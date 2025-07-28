import {ChangeEvent, FC, useRef} from "react";
import cs from "classnames";
import textarea from "@ui/Textarea/index";
import Typography from "@ui/Typography";
import ErrorMessage from "@ui/Messages/ErrorMessage";

interface TextareaModel {
    value: string,
    onChange: any,
    disabled?: boolean,
    placeholder?: string,
    name: string,
    containerClassName?: string,
    error?: any,
    className?: string,
    label?: string
}

export const Textarea: FC<TextareaModel> = (
    {
        value,
        onChange,
        placeholder,
        disabled,
        name,
        containerClassName,
        error,
        label,
        className
    }
) => {

    const textAreaRef = useRef(null);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let element = textAreaRef.current as any;
        element.style.height = `${element.scrollHeight}px`;
        onChange(event);
    }

    return (
        <div className={cs({
            [containerClassName as string]: containerClassName
        }, "font w-full flex items-start flex-col gap-1")}>
            {
                label
                &&
                <Typography
                    variant={"body"}
                >
                    {label}
                </Typography>
            }
            <textarea
                ref={textAreaRef}
                className={cs({
                        [className as string]: className
                    }, "w-full bg-spring rounded-xl p-3 text-dove-grey focus:outline-0"
                )}
                value={value}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                onChange={handleChange}
            />
            <ErrorMessage
                error={error}
            />
        </div>
    )
}