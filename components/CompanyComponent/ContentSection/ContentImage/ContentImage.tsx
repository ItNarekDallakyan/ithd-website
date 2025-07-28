import {FC} from "react";
import Image from "next/image";

interface ContentImageModel {
    src: string
}

export const ContentImage: FC<ContentImageModel> = (
    {
        src
    }
) => {
    return (
        <Image
            className={"max-sm:max-w-full mb-4 max-sm:min-w-full max-w-[200px] min-w-[200px] rounded-2xl object-cover"}
            width={200}
            height={200}
            src={src}
            alt={"content-image"}
        />
    )
}