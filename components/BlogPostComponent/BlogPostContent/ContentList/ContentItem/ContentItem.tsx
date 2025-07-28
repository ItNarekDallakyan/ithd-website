import {FC, useEffect} from "react";
import {BlogPostContentModel} from "@models/interfaces";
import Typography from "@ui/Typography";
import Image from "next/image";
import cs from "classnames";
import ArrayListProvider from "@hoc/ArrayListProvider";
import {useMainSelector} from "@store/selectors";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";
import {Conditions} from "@common/conditions";
import {Helpers} from "@common/helpers";
import VideoWrapper from "@ui/VideoWrapper";

interface ContentItemModel {
    data: BlogPostContentModel,
    className?: string
}

export const ContentItem: FC<ContentItemModel> = (
    {
        data,
        className
    }
) => {

    const router = useRouter();
    const {currentLanguage} = useMainSelector();
    let searchParams = useSearchParams();

    let queryContent = searchParams.get("content");

    let {
        title,
        items
    } = data;

    const scrollToView = async (content: string | null) => {
        if (!content || !Conditions.isWindowLoaded()) return;
        let element = document.getElementById(content);
        if (!element) return;
        router.query = {
            ...router.query,
            content
        };
        router.push(router);
        element.scrollIntoView();
    }

    useEffect(() => {
        scrollToView(queryContent);
    }, [router.query.content]);

    return (
        Conditions.isWindowLoaded()
        ?
        <div
            id={title[currentLanguage]}
            className={cs({
            [className as string]: className
        }, "w-full flex items-start flex-col gap-3")}>
            <Typography
                variant={"h4"}
            >
                {title[currentLanguage]}
            </Typography>
            <ArrayListProvider array={items}>
                <div className={"flex flex-col gap-3 w-full"}>
                    {
                        items.map((item, index) => {
                            let {
                                description,
                                image,
                                video
                            } = item;

                            const descriptionValue = Helpers.extractHTMLContent(description[currentLanguage], true);

                            return (
                                <div
                                    key={index}
                                    className={"flex items-start flex-col gap-3"}
                                >
                                    <div dangerouslySetInnerHTML={{__html: descriptionValue || ""}}></div>
                                    {
                                        video || image
                                            ?
                                            video
                                                ?
                                                <VideoWrapper
                                                    className={"max-xl:w-full max-xl:h-[300px] max-sm:h-[175px]"}
                                                    iframeClassName={"rounded-3xl max-xl:h-[300px] max-sm:h-[175px] max-xl:h-full overflow-hidden max-xl:w-full"}
                                                    videoId={video}
                                                />
                                                :
                                                <Image
                                                    title={title[currentLanguage]}
                                                    className={"w-full rounded-2xl"}
                                                    width={300}
                                                    height={300}
                                                    src={image as string}
                                                    alt={"content-image"}
                                                />
                                            :
                                            null
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </ArrayListProvider>
        </div>
        :
        null
    )
}