import {FC, useEffect, useState} from "react";
import {BlogPostContentModel} from "@models/interfaces";
import ContentItem from "@components/BlogPostComponent/BlogPostContent/ContentList/ContentItem";

interface ContentListModel {
    contents: BlogPostContentModel[]
}

export const ContentList: FC<ContentListModel> = ({contents}) => {

    let [contentsList, setContentsList] = useState<BlogPostContentModel[]>([]);

    // contents list sort
    const sortContentsList = () => {
        if (!contents.length) return;
        let copy = [...contents];
        // @ts-ignore
        let data = copy.sort((a, b) => {
            if (!a.contentNumber || !b.contentNumber) return;
            return a.contentNumber - b.contentNumber;
        });
        setContentsList(data);
    }

    useEffect(() => {
        sortContentsList();
    }, [contents]);

    return (
        <>
            {
                contentsList.length
                    ?
                    contentsList.map((content, index) => {
                        return (
                            <ContentItem
                                key={index}
                                data={content}
                            />
                        )
                    })
                    :
                    null
            }
        </>
    )
}