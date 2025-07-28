import {FC} from "react";
import {BlogPostModel} from "@models/interfaces";
import ArrayListProvider from "@hoc/ArrayListProvider";
import ListCard from "@ui/ListCard";
import {Helpers} from "@common/helpers";
import {useRouter} from "next/router";
import {ROUTES, STORAGE_KEYS} from "@models/enums";
import BlogPostCategories from "@components/BlogComponent/BlogPostsList/BlogPostCategories";
import {useMainSelector} from "@store/selectors";

interface BlogPostsListModel {
    posts: BlogPostModel[] | null,
    page: number,
    query: string,
    currentCategory: string
}

export const BlogPostsList: FC<BlogPostsListModel> = (
    {
        posts,
        page,
        currentCategory,
        query
    }) => {

    const {currentLanguage} = useMainSelector();

    let router = useRouter();

    return (
        <ArrayListProvider
            array={posts}
            emptyLabel={"Empty blog posts"}
        >
            {
                posts?.map(post => {

                    let {
                        id,
                        title,
                        shortDescription,
                        thumbnail,
                        path
                    } = post;

                    let blogPostPageRoute = `${ROUTES.BLOG}/${path}`;

                    const handleBlogRedirect = () => {
                        Helpers.setItemToStorage(STORAGE_KEYS.BLOG_PAGE, page.toString());
                        Helpers.setItemToStorage(STORAGE_KEYS.SCROLL_POSITION, window.scrollY.toString());
                        Helpers.setItemToStorage(STORAGE_KEYS.BLOG_QUERY, query);
                        Helpers.setItemToStorage(STORAGE_KEYS.CATEGORY, currentCategory);
                        router.push(blogPostPageRoute);
                    };

                    return (
                        <ListCard
                            topChildren={
                                <BlogPostCategories
                                    post={post}
                                />
                            }
                            key={id}
                            title={title[currentLanguage]}
                            description={shortDescription[currentLanguage]}
                            image={thumbnail}
                            onClick={handleBlogRedirect}
                        />
                    )
                })
            }
        </ArrayListProvider>
    )
}