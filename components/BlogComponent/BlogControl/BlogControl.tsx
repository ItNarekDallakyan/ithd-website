import {FC, memo} from "react";
import BlogCategoriesList from "@components/BlogComponent/BlogCategoriesList";
import {useBlogSelector} from "@store/selectors";
import SearchPanel from "@components/BlogComponent/BlogControl/SearchPanel";
import Typography from "@ui/Typography";

interface BlogControlModel {
    currentCategory: string,
    value: string,
    onCategorySelect: (id: string) => void,
    onSearchCallback: (query: string) => void
}

export const BlogControl: FC<BlogControlModel> = memo((
    {
        currentCategory,
        value,
        onCategorySelect,
        onSearchCallback
    }
) => {

    let {categories} = useBlogSelector();

    return (
        <div className={"flex items-start flex-col gap-7"}>
            <div className={"flex items-center gap-3 w-full flex-wrap max-sm:pb-3"}>
                <BlogCategoriesList
                    onCategorySelect={onCategorySelect}
                    currentCategory={currentCategory}
                    categories={categories}
                />
            </div>
            <SearchPanel
                onSearchCallback={onSearchCallback}
            />
            {
                value
                &&
                <Typography
                    variant={"body"}
                >
                    Search results for: <strong>{value}</strong>
                </Typography>
            }
        </div>
    )
});

BlogControl.displayName = "BlogControl";