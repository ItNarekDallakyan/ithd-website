import {FC} from "react";
import CompanyCard from "@components/PartnerComponent/CompanyInfo/CompanyCard";
import TableOfContent from "@components/BlogPostComponent/BlogPostContent/TableOfContent";
import {BlogPostModel} from "@models/interfaces";
import {useMainSelector} from "@store/selectors";
import cs from "classnames";

interface BlogPostSidebarModel {
    post: BlogPostModel,
    className?: string
}

export const BlogPostSidebar: FC<BlogPostSidebarModel> = (
    {
        className,
        post
    }
) => {

    const {currentLanguage} = useMainSelector();

    const titles = post.contents.map(content => content?.title[currentLanguage]);

    return (
        <div className={cs({
            [className as string]: className
        })}>
            <div className={"flex flex-col items-end gap-5 sticky top-[20px]"}>
                <TableOfContent
                    V2
                    data={titles}
                />
                <CompanyCard />
            </div>
        </div>
    )
}