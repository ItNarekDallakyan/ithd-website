import {FC} from "react";
import Chip from "@ui/Chip";
import {BlogPostModel} from "@models/interfaces";
import {Helpers} from "@common/helpers";
import {useMainSelector} from "@store/selectors";

interface BlogPostCategoriesModel {
    post: BlogPostModel
}

export const BlogPostCategories: FC<BlogPostCategoriesModel> = (
    {
        post
    }) => {

    const {currentLanguage} = useMainSelector();

    const {category} = post;

    const capitalizedWord = Helpers.capitalizeEachWord(category[currentLanguage]);

    return (
        <div className={"flex items-center gap-3 mb-2 max-sm:mt-3"}>
            <Chip>
                {capitalizedWord}
            </Chip>
        </div>
    )
}