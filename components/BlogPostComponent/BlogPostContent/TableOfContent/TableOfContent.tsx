import {FC, memo} from "react";
import ContentsList from "@components/BlogPostComponent/BlogPostContent/TableOfContent/ContentsList";
import Typography from "@ui/Typography";
import cs from "classnames";

interface TableOfContentModel {
    data: string[],
    V2?: boolean
}

export const TableOfContent: FC<TableOfContentModel> = memo((
    {
        data,
        V2 = false
    }
) => {
    return (
        <div className={cs({
            ["w-full p-5 rounded-2xl bg-white border border-[#eff1f1]"]: V2
        })}>
            <div className={"flex flex-col gap-3"}>
                {
                    !V2
                    &&
                    <Typography variant={"h4"}>
                        Table of content
                    </Typography>
                }
                <ul>
                    <ContentsList
                        V2={V2}
                        data={data}
                    />
                </ul>
            </div>
        </div>
    )
});

TableOfContent.displayName = "TableOfContent";