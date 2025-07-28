import {FC} from "react";

interface DateFieldModel {
    onChange: any,
    name: string,
    error?: any,
    value: string
}

export const DateField: FC<DateFieldModel> = (
    {
        onChange,
        name,
        error,
        value
    }
) => {
    return (
        <div className={"w-full flex flex-col gap-1"}>
            <input
                value={value}
                name={name}
                onChange={onChange}
                className={"outline-none w-full p-3 bg-spring rounded-lg"}
                type={"date"}
            />
            {error && <p className={"text-sm text-pink font-medium"}>{error}</p>}
        </div>
    )
}