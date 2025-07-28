import {FC} from "react";
import {TestimonyModel} from "@models/interfaces";
import Typography from "@ui/Typography";
import {useMainSelector} from "@store/selectors";
import QuoteIcon from "@assets/icons/QuoteIcon";
import Link from "next/link";
import {ROUTES} from "@models/enums";

interface TestimonyItemModel {
    testimony: TestimonyModel
}

export const TestimonyItem: FC<TestimonyItemModel> = (
    {
        testimony
    }
) => {

    const {currentLanguage} = useMainSelector();

    const {
        content
    } = testimony;

    const {
        image,
        name
    } = testimony.reviewer;

    return (
        <div className={"group bg-white rounded-3xl flex items-start gap-8 p-8 shadow hover:shadow-md transition-all duration-300 max-md:gap-5"}>
            <div className={"flex flex-col gap-3"}>
                <img
                    className={"rounded-full min-w-[100px] min-h-[100px] object-cover max-md:min-w-[75px] max-md:min-h-[75px]"}
                    width={100}
                    height={100}
                    src={image}
                    alt={"reviewer-image"}
                />
                <Typography
                    className={"group-hover:text-orange transition-all duration-300 font-bold"}
                    variant={"body"}
                >
                    {name[currentLanguage]}
                </Typography>
            </div>
            <div className={"flex flex-col gap-3"}>
                <QuoteIcon
                    width={"40"}
                    height={"40"}
                />
                <Typography variant={"body"}>
                    {content[currentLanguage]}
                </Typography>
            </div>
        </div>
    )
}