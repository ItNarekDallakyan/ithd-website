import {FC, memo} from "react";
import {BlogPostModel} from "@models/interfaces";
import {useRouter} from "next/router";
import {ROUTES} from "@models/enums";
import {useMainSelector} from "@store/selectors";
import ArrayListProvider from "@hoc/ArrayListProvider";
import InfoCard from "@ui/InfoCard";
import Chip from "@ui/Chip";
import {Helpers} from "@common/helpers";

interface OtherPostsListModel {
    posts: BlogPostModel[]
}

export const OtherPostsList: FC<OtherPostsListModel> = memo((
    {
        posts
    }
) => {

    let {currentLanguage} = useMainSelector();
    let router = useRouter();

    return (
        <ArrayListProvider
            array={posts}
        >
            {
                posts?.map(post => {

                    let {
                        id,
                        title,
                        thumbnail,
                        path,
                        category
                    } = post;

                    const categoryValue = Helpers.capitalizeEachWord(category[currentLanguage]);

                    const handlePostRedirect = async () => {
                        await router.push(`${ROUTES.BLOG}/${path}`);
                    }

                    return (
                        <InfoCard
                            className={"group"}
                            key={id}
                            title={title[currentLanguage]}
                            onClick={handlePostRedirect}
                            image={thumbnail as string}
                            movie={""}
                        >
                            <Chip
                                typographyWeight={"semibold"}
                                typographyClassName={"text-purple-dark transition-all duration-300 group-hover:text-dark"}
                                className={"inline-block transition-all duration-300 bg-purple group-hover:bg-orange mb-3 me-auto"}
                            >
                                {categoryValue}
                            </Chip>
                        </InfoCard>
                    );

                })
            }
        </ArrayListProvider>
    )
});

OtherPostsList.displayName = "OtherPostsList";