import {FC, useEffect, useState} from "react";
import {BlogPostModel} from "@models/interfaces";
import InfoItem from "@components/BlogPostComponent/BlogPostContent/BlogPostCreationInfo/InfoItem";
import SocialShareBar from "@components/BlogPostComponent/BlogPostContent/BlogPostCreationInfo/SocialShareBar";
import UserInfoItem from "@ui/UserInfoItem";
import cs from "classnames";
import {Helpers} from "@common/helpers";
import {useMainSelector} from "@store/selectors";

interface BlogPostCreationInfoModel {
    post: BlogPostModel,
    className?: string
}

const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

const dateFormatter = new Intl.DateTimeFormat("en-US", dateOptions);

export const BlogPostCreationInfo: FC<BlogPostCreationInfoModel> = (
    {
        post,
        className
    }
) => {

    const {currentLanguage} = useMainSelector();

    let [updatedDate, setUpdatedDate] = useState<string>("");

    const validCategory = Helpers.capitalizeEachWord(post?.category[currentLanguage] || "");

    const setBlogPostUpdatedDate = () => {
        if (!post) return;
        const updatedDate = new Date(post.updatedAt);
        const formattedUpdatedDate = dateFormatter.format(updatedDate);
        setUpdatedDate(formattedUpdatedDate);
    }

    useEffect(() => {
        setBlogPostUpdatedDate();
    }, [post]);

    return (
        <div className={cs({
            [className as string]: className
        }, "w-full max-sm:flex-col max-sm:gap-5")}>
            <UserInfoItem
                creatorInfo={post?.creator[currentLanguage] || ""}
            />
            <div className={"flex items-start gap-8 my-3 max-md:flex-wrap"}>
                <InfoItem
                    className={"gap-2"}
                    label={"Last updated"}
                    value={updatedDate}
                />
                <InfoItem
                    className={"gap-2"}
                    label={"Read"}
                    value={`${post?.minutesToRead} min`}
                />
                <InfoItem
                    className={"gap-2"}
                    label={"Category"}
                    value={
                        post?.category?.url
                            ?
                            <a
                                className={"font-bold"}
                                href={post.category.url}
                            >
                                {validCategory}
                            </a>
                            :
                            validCategory
                    }
                />
                <InfoItem
                    label={"Share with social"}
                    value={
                        <SocialShareBar
                            post={post}
                            className={"ml-[-10px]"}
                        />
                    }
                />
            </div>
        </div>
    )
}