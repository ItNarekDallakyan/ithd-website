import {FC, memo, ReactNode, useEffect} from "react";
import {Typography} from "@ui/Typography/Typography";
import {useBlogSelector} from "@store/selectors";
import {Helpers} from "@common/helpers";
import {STORAGE_KEYS} from "@models/enums";
import Spinner from "@ui/Loaders/Spinner";
import cs from "classnames";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";

const Pagination = dynamic(() => import("@ui/Pagination"), {
    ssr: false
});
const BlogControl = dynamic(() => import("@components/BlogComponent/BlogControl"));
const BlogPostsList = dynamic(() => import("@components/BlogComponent/BlogPostsList"));
const BlogSubscriptionSection = dynamic(() => import("@components/BlogComponent/BlogSubscriptionSection"));

interface BlogComponentModel {
    title: string,
    headerRightChildren?: ReactNode,
    headerClassName?: string,
    page: number,
    currentCategory: string,
    query: string
}

export const BlogComponent: FC<BlogComponentModel> = memo((
    {
        title,
        headerRightChildren,
        headerClassName,
        page,
        currentCategory,
        query
    }
) => {

    let router = useRouter();
    let {posts, categories} = useBlogSelector();

    // restore scroll position
    const setScrollPosition = () => {
        const scrollPosition = Helpers.getItemFromStorage(STORAGE_KEYS.SCROLL_POSITION);
        if (!scrollPosition) return;
        window.scrollTo(0, +scrollPosition);
    }

    // const handleSubscriptionSubmit = async (values: SubscriptionBodyModel) => {
    //     let response = await SubscriptionService.createSubscription(values);
    //     if (response) {
    //         return dispatch(setMessage({
    //             type: MESSAGES_TYPES.INFO,
    //             body: "Successfully sent"
    //         }));
    //     }
    //
    //     return dispatch(setMessage({
    //         type: MESSAGES_TYPES.ERROR,
    //         body: "Error from the server"
    //     }));
    // }

    const handleSearchCallback = async (query: string) => {
        router.query = {
            page: "0",
            category: currentCategory,
            query
        };
        await router.push(router);
    }

    const handleCategorySelectCallback = async (id: string) => {
        router.query = {
            page: "0",
            category: id,
            query
        };
        await router.push(router);
    }

    const clearStorage = () => {
        Helpers.removeItemFromStorage(STORAGE_KEYS.SCROLL_POSITION);
        Helpers.removeItemFromStorage(STORAGE_KEYS.BLOG_PAGE);
        Helpers.removeItemFromStorage(STORAGE_KEYS.CATEGORY);
    }

    const handlePageClickCallback = async (selected: number) => {
        Helpers.removeItemFromStorage(STORAGE_KEYS.BLOG_PAGE);
        router.query = {
            page: selected.toString(),
            category: currentCategory,
            query
        };
        await router.push(router);
    }

    useEffect(() => {
        window.addEventListener("beforeunload", clearStorage);
        return () => window.removeEventListener("beforeunload", clearStorage);
    }, []);

    useEffect(() => {
        setScrollPosition();
    }, []);

    return (
        <div className={"pt-10"}>
            <div className={"container mx-auto pb-16 space-y-10"}>
                <div className={cs({
                    [headerClassName as string]: headerClassName
                })}>
                    <Typography
                        className={"xl:w-3/4"}
                        variant={"h1"}
                    >
                        {title}
                    </Typography>
                    {headerRightChildren}
                </div>
                {
                    posts
                        ?
                        <div className={"space-y-10"}>
                            <BlogControl
                                onSearchCallback={handleSearchCallback}
                                onCategorySelect={handleCategorySelectCallback}
                                value={query}
                                currentCategory={currentCategory}
                            />
                            <BlogPostsList
                                query={query}
                                currentCategory={currentCategory}
                                page={page}
                                posts={posts.response || null}
                            />
                            {
                                posts?.response?.length && page !== null
                                    ?
                                    <Pagination
                                        onPageClickCallback={handlePageClickCallback}
                                        page={page}
                                        pagesCount={posts.totalPages}
                                    />
                                    :
                                    null
                            }
                        </div>
                        :
                        <Spinner isLoading={true}/>
                }
            </div>
            {/*{*/}
            {/*    !isAdmin*/}
            {/*    &&*/}
            {/*    <BlogSubscriptionSection*/}
            {/*        onSubmit={handleSubscriptionSubmit}*/}
            {/*    />*/}
            {/*}*/}
        </div>
    )
});

BlogComponent.displayName = "BlogComponent";
