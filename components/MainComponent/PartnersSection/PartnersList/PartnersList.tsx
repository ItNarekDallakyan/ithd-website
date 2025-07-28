import {FC} from "react";
import {PARTNERS_LIST} from "@common/database";
import Image from "next/image";

export const PartnersList: FC = () => {
    return (
        <>
            {
                PARTNERS_LIST.map(partner => {
                    let {path} = partner;
                    return (
                        <div key={path} className={"px-8 shadow py-16 max-sm:py-8 bg-white rounded-3xl"}>
                            <Image
                                width={140}
                                height={45}
                                className={"h-[45px] object-contain"}
                                objectFit={"cover"}
                                src={path}
                                alt={"partner-logo"}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}