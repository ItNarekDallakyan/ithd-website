import {FC, memo, Suspense, useContext, useEffect, useState} from "react";
import dynamic from "next/dynamic";
import MainLayout from "@layouts/MainLayout";
import {ROUTES, STORAGE_KEYS} from "@models/enums";
import {LocalizationsContext} from "@core/context";
import {Helpers} from "@common/helpers";
import {useSearchParams} from "next/navigation";
import {BlogService} from "@services/BlogService";
import {useAppDispatch} from "@hooks/toolkit";
import {BLOG_CATEGORIES, BLOG_POSTS} from "@common/database/blog";
import {setBlogPostsCategories} from "@store/reducers/BlogReducer";
import Preloader from "@ui/Preloader";
import {useMainSelector} from "@store/selectors";

const BlogComponent = dynamic(() => import("@components/BlogComponent"), {
    suspense: true
});

const BlogPage: FC = memo(() => {

    let {localizations} = useContext(LocalizationsContext);
    let {currentLanguage} = useMainSelector();

    let dispatch = useAppDispatch();

    let {title} = localizations[currentLanguage].blog;

    let [page, setPage] = useState<number | null>(null);
    let [currentCategory, setCurrentCategory] = useState<string>("");
    let [query, setQuery] = useState<string>("");

    let storagePage = Helpers.getItemFromStorage(STORAGE_KEYS.BLOG_PAGE);
    let storageQuery = Helpers.getItemFromStorage(STORAGE_KEYS.BLOG_QUERY);
    let storageCategory = Helpers.getItemFromStorage(STORAGE_KEYS.CATEGORY);

    let searchParams = useSearchParams();

    let queryPage = searchParams.get("page");
    let queryQuery = searchParams.get("query");
    let queryCategory = searchParams.get("category");

    const setInitialData = () => {
        setPage(null);

        if (storageQuery) {
            setQuery(storageQuery);
            Helpers.removeItemFromStorage(STORAGE_KEYS.BLOG_QUERY);
        } else if (queryQuery) {
            setQuery(queryQuery);
        } else {
            setQuery("");
        }

        if (storagePage) {
            setPage(+storagePage);
        } else if (queryPage) {
            setPage(+queryPage);
        } else {
            setPage(0);
        }

        if (storageCategory && storageCategory !== "null") {
            setCurrentCategory(storageCategory);
            Helpers.removeItemFromStorage(STORAGE_KEYS.CATEGORY);
        } else if (queryCategory) {
            setCurrentCategory(queryCategory);
        } else {
            setCurrentCategory("");
        }
    }

    const getBlogCategories = () => {
        dispatch(setBlogPostsCategories(BLOG_CATEGORIES));
    }

    const getBlogPostsHandler = () => {
        let {
            getBlogPosts
        } = new BlogService(dispatch, BLOG_POSTS);
        let limit = 7;
        if (page === null) return;
        getBlogPosts(
            currentLanguage,
            page,
            currentCategory,
            query,
            limit
        );
    }

    useEffect(() => {
        getBlogCategories();
    }, []);

    useEffect(() => {
        setInitialData();
    }, [queryQuery, queryPage, queryCategory]);

    useEffect(() => {
        getBlogPostsHandler();
    }, [page, query, currentCategory]);

    return (
        <MainLayout
            isBreadcrumbs
            headerBgColor={"bg-spring"}
            path={"blog"}
            title={"Blog"}
            routeKey={ROUTES.BLOG}
            footerBgColor={"white"}
            background={"spring"}
        >
            {
                page !== null
                &&
                <Suspense
                    fallback={<Preloader isLoading={true}/>}
                >
                    <BlogComponent
                        query={query}
                        currentCategory={currentCategory}
                        page={page}
                        title={title}
                    />
                </Suspense>
            }
        </MainLayout>
    )
});

BlogPage.displayName = "BlogPage";

export default BlogPage;
