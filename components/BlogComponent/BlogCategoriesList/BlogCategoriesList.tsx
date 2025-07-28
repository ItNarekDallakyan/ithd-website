import {FC} from "react";
import {BlogPostCategoryModel} from "@models/interfaces";
import Button from "@ui/Button";
import {useMainSelector} from "@store/selectors";

interface BlogCategoriesListModel {
    categories: BlogPostCategoryModel[] | null,
    currentCategory: string,
    onCategorySelect: (id: string) => void
}

export const BlogCategoriesList: FC<BlogCategoriesListModel> = (
    {
        categories,
        currentCategory,
        onCategorySelect
    }
) => {

    const {currentLanguage} = useMainSelector();

    const handleAllCategoriesSelect = () => {
        onCategorySelect("");
    };

    return (
        <>
            <Button
                color={!currentCategory ? "orange" : "grey"}
                hover={"background"}
                onClick={handleAllCategoriesSelect}
            >
                All topics
            </Button>
            {
                categories?.map(category => {
                    let {name} = category;

                    let isActive = currentCategory.toLowerCase() === name[currentLanguage].toLowerCase();

                    const handleCategorySelect = () => {
                        onCategorySelect(name[currentLanguage].toLowerCase());
                    };

                    return (
                        <Button
                            color={isActive ? "orange" : "grey"}
                            hover={"background"}
                            key={name[currentLanguage]}
                            onClick={handleCategorySelect}
                        >
                            {name[currentLanguage]}
                        </Button>
                    )
                })
            }
        </>
    )
}