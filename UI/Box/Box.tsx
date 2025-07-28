import {FC} from "react";
import {Typography} from "@ui/Typography/Typography";
import cs from "classnames";
import Image from "next/image";

interface BoxModel {
    image: string,
    onClick: () => void,
    className?: string,
    description: string,
    alt: string
}

export const Box: FC<BoxModel> = (
    {
        image,
        onClick,
        className,
        description,
        alt
    }
) => {
    return (
        <div className={cs({
            [className as string]: className
        }, "w-full flex flex-col transition-all space-y-5")}>
            <div>
                <Image
                    quality={80}
                    alt={alt}
                    onClick={onClick}
                    width={450}
                    height={280}
                    className={"max-md:w-full w-[450px] h-[280px] object-cover rounded-xl"}
                    src={image}
                />
            </div>
            <div>
                <Typography
                    variant={"h5"}
                >
                    {description}
                </Typography>
            </div>
        </div>
    )
}
