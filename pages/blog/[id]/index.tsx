import {FC, useEffect} from "react";
import {useAppDispatch} from "@hooks/toolkit";
import {setBlogPosts} from "@store/reducers/BlogReducer";
import {BLOG_POSTS} from "@common/database/blog";
import {useMainSelector} from "@store/selectors";
import {BlogPostModel} from "@models/interfaces";
import {Helpers} from "@common/helpers";
import HTMLHeadProvider from "@hoc/HTMLHeadProvider";
import MainLayout from "@layouts/MainLayout";
import {PLATFORM_NAME, ROBOTS_CONTENT, WEBSITE_URL} from "@common/variables";
import BlogPostComponent from "@components/BlogPostComponent";

interface BlogPostPageModel {
    post: BlogPostModel
}

const BlogPostPage: FC<BlogPostPageModel> = ({post}) => {

    let {currentLanguage} = useMainSelector();
    let dispatch = useAppDispatch();

    const setBlogPostsHandler = () => {
        dispatch(setBlogPosts({
            response: BLOG_POSTS,
            totalElements: BLOG_POSTS.length,
            totalPages: 0
        }));
    }

    useEffect(() => {
        setBlogPostsHandler();
    }, []);

    return (
        <>
            <HTMLHeadProvider
                path={`blog/${post?.path}`}
                imageWidth={"1000"}
                imageHeight={"700"}
                image={WEBSITE_URL.concat(post?.thumbnail || "")}
                title={post?.title[currentLanguage]}
                description={Helpers.extractHTMLContent(post?.shortDescription[currentLanguage]) || ""}
                robots={ROBOTS_CONTENT}
                type={"article"}
                locale={"en_US"}
                pageURL={`${WEBSITE_URL}/blog/${post?.path}`}
                site_name={PLATFORM_NAME}
            />
            <MainLayout
                headerBgColor={"bg-spring"}
                breadcrumbTitle={post?.title[currentLanguage]}
                isBreadcrumbs
                footerBgColor={"white"}
            >
                <BlogPostComponent
                    post={post}
                />
            </MainLayout>
        </>
    )
};

export async function getStaticPaths() {
    const paths = BLOG_POSTS.map(post => {
        return {
            params: {
                id: post.path
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}: any) {

    let id = params.id;
    let data = Helpers.getSingleDetailData(BLOG_POSTS, id);

    return {
        props: {
            post: data
        },
        revalidate: 1
    }
}

export default BlogPostPage;