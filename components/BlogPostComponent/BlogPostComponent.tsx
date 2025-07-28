import {FC, memo} from "react";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import OtherPostsSection from "@components/BlogPostComponent/OtherPostsSection";
import HelperSection from "@ui/Sections/HelperSection";
import BlogPostCreationInfo from "@components/BlogPostComponent/BlogPostContent/BlogPostCreationInfo";
import {BlogPostModel} from "@models/interfaces";
import dynamic from "next/dynamic";
import {useMainSelector} from "@store/selectors";

interface BlogPostComponentModel {
    post: BlogPostModel
}

const DetailHomeSection = dynamic(() => import("@ui/Sections/DetailHomeSection"), {
    ssr: false
});
const BlogPostContent = dynamic(() => import("@components/BlogPostComponent/BlogPostContent"));

export const BlogPostComponent: FC<BlogPostComponentModel> = memo((
    {
        post
    }
) => {

    let router = useRouter();

    const {currentLanguage} = useMainSelector();

    const handleBlogPageRedirect = () => router.push(ROUTES.BLOG,
        undefined,
        {
            shallow: true
        })

    return (
        <>
            <DetailHomeSection
                isSmallImage
                bottomChildren={
                    <BlogPostCreationInfo
                        post={post}
                    />
                }
                className={"pb-16"}
                backLabel={"Back to all"}
                title={post?.title[currentLanguage] as string}
                description={post?.shortDescription[currentLanguage] as string}
                onBack={handleBlogPageRedirect}
                image={post?.thumbnail || ""}
            />
            <BlogPostContent
                post={post}
            />
            <OtherPostsSection
                post={post}
            />
            <HelperSection
                shadowColor={"white"}
            />
        </>
    )
});

BlogPostComponent.displayName = "BlogPostComponent";