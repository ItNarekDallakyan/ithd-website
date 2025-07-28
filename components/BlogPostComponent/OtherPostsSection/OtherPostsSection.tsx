import {FC, memo, useContext, useEffect, useState} from "react";
import Typography from "@ui/Typography";
import OtherPostsList from "@components/BlogPostComponent/OtherPostsSection/OtherPostsList";
import {useBlogSelector, useMainSelector} from "@store/selectors";
import {LocalizationsContext} from "@core/context";
import {BlogPostModel} from "@models/interfaces";
import {Helpers} from "@common/helpers";

interface OtherPostsSectionModel {
    post: BlogPostModel
}

export const OtherPostsSection: FC<OtherPostsSectionModel> = memo((
    {
        post
    }
) => {

    let {posts} = useBlogSelector();
    let {currentLanguage} = useMainSelector();
    let {localizations} = useContext(LocalizationsContext);
    let {otherPostsTitle} = localizations[currentLanguage].blogPost;

    let [otherPosts, setOtherPosts] = useState<BlogPostModel[]>([]);

    const setOtherPostsHandler = () => {

        if (!posts) return;

        if (posts.response.length < 3) return;

        let postsValidArray = posts.response
            .filter((value: BlogPostModel) => {
                return value.id !== post?.id
            });

        let otherPostsArray: BlogPostModel[] = [];
        otherPostsArray = Helpers.getMultipleRandom(postsValidArray, 6);
        setOtherPosts(otherPostsArray);
    }

    useEffect(() => {
        setOtherPostsHandler();
    }, [post, posts]);

    return (
        otherPosts.length
            ?
            <div className={"bg-spring py-24"}>
                <div className={"container mx-auto"}>
                    <div className={"flex items-end mb-10"}>
                        <Typography
                            variant={"h2"}
                        >
                            {otherPostsTitle}
                        </Typography>
                    </div>
                    <div className={"grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5"}>
                        <OtherPostsList
                            posts={otherPosts}
                        />
                    </div>
                </div>
            </div>
            :
            null
    )
});

OtherPostsSection.displayName = "OtherPostsSection";