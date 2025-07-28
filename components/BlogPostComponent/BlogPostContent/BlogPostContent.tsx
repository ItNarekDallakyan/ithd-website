import {FC, memo} from "react";
import ContentList from "@components/BlogPostComponent/BlogPostContent/ContentList";
import {useMainSelector} from "@store/selectors";
import Typography from "@ui/Typography";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import BlogPostCreationInfo from "@components/BlogPostComponent/BlogPostContent/BlogPostCreationInfo";
import BlogPostSidebar from "@components/BlogPostComponent/BlogPostContent/BlogPostSidebar";
import TableOfContent from "@components/BlogPostComponent/BlogPostContent/TableOfContent";
import {BlogPostModel} from "@models/interfaces";

interface BlogPostContentModel {
    post: BlogPostModel
}

export const BlogPostContent: FC<BlogPostContentModel> = memo((
    {
        post
    }
) => {

    let {currentLanguage} = useMainSelector();
    let router = useRouter();

    const titles = post.contents.map(content => content.title[currentLanguage]);

    const handleBack = () => router.push(ROUTES.BLOG, undefined, {
        shallow: true
    });

    return (
        <div className={"bg-white py-16 flex h-full"}>
            <div className={"container mx-auto flex justify-between gap-16"}>
                <div className={"flex items-start flex-col gap-10 w-full"}>
                    <TableOfContent
                        data={titles as string[]}
                    />
                    <div className={"w-full flex flex-col gap-10"}>
                        <ContentList
                            contents={post.contents || []}
                        />
                        <BlogPostCreationInfo
                            post={post}
                        />
                        <Typography
                            weight={"medium"}
                            onClick={handleBack}
                            className={"text-orange max-w-md w-full cursor-pointer"}
                            variant={"body"}
                        >
                            Back to all
                        </Typography>
                    </div>
                </div>
                <BlogPostSidebar
                    className={"max-xl:hidden"}
                    post={post}
                />
            </div>
        </div>
    )
});

BlogPostContent.displayName = "BlogPostContent";