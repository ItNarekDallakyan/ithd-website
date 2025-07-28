import {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import Image from "next/image";

interface SearchPanelModel {
    onSearchCallback: (query: string) => void
}

export const SearchPanel: FC<SearchPanelModel> = (
    {
        onSearchCallback
    }
) => {

    const [query, setQuery] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let {value} = event.target;
        setQuery(value);
    }

    const handleSubmit = async () => {
        await onSearchCallback(query);
        setQuery("");
    }

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        let {key} = event;

        if (key === "Enter") {
            setQuery("");
            await onSearchCallback(query);
        }
    }

    return (
        <div className={"w-full max-w-xl relative flex items-center"}>
            <input
                onKeyDown={handleKeyDown}
                value={query}
                onChange={handleChange}
                placeholder={"Type to search.."}
                className={"w-full py-3 ps-5 pe-10 outline-none rounded-full"}
            />
            <button
                onClick={handleSubmit}
                className={"absolute right-4"}
            >
                <Image
                    loading={"lazy"}
                    title={"Blog search icon"}
                    quality={80}
                    width={18}
                    height={19}
                    src={"/images/search-icon.svg"}
                    alt={"search-icon"}
                />
            </button>
        </div>
    )
}