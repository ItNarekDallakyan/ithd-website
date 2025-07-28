import {FC} from "react";
import Image from "next/image";
import Typography from "@ui/Typography";

interface UserInfoItemModel {
    creatorInfo: string
}

export const UserInfoItem: FC<UserInfoItemModel> = (
    {
        creatorInfo
    }
) => {
    return (
        <div className={"flex items-center gap-4"}>
            <div>
                <Image
                    src={"/images/ithd-preview-image.jpg"}
                    alt={"user-info-item"}
                    width={80}
                    height={80}
                    className={"rounded-2xl h-20 object-contain"}
                />
            </div>
            <div>
                <Typography
                    className={"flex items-start flex-col"}
                    variant={"body"}
                >
                    {creatorInfo}
                </Typography>
            </div>
        </div>
    )
}