import {FC, MouseEvent} from "react";
import ContentItem from "@components/BlogPostComponent/BlogPostContent/TableOfContent/ContentsList/ContentItem";
import {useRouter} from "next/router";
import {Conditions} from "@common/conditions";

interface ContentsListModel {
    data: string[],
    V2: boolean
}

export const ContentsList: FC<ContentsListModel> = (
    {
        data,
        V2
    }
) => {

    const router = useRouter();

    return (
        <>
            {
                data.map((content, index) => {

                    const indexValue = index + 1;

                    const handleScroll = async (event: MouseEvent<HTMLLinkElement>) => {
                        event.preventDefault();
                        event.nativeEvent.preventDefault();
                        if (!content || !Conditions.isWindowLoaded()) return;
                        let element = document.getElementById(content);
                        if (!element) return;
                        router.query.content = content;
                        await router.push(router);
                        element.scrollIntoView();
                    }

                    return (
                        <ContentItem
                            key={content}
                            V2={V2}
                            onClick={handleScroll}
                            content={content}
                            index={indexValue}
                        />
                    )
                })
            }
        </>
    )
};