import {FC} from "react";
import Image from "next/image";
import VideoWrapper from "@ui/VideoWrapper";

interface ScenesListModel {
    scenes: string[],
    imagesGrid: boolean
}

export const ScenesList: FC<ScenesListModel> = (
    {
        scenes
    }
) => {
    return (
        <>
            {
                scenes.map((scene, index) => {

                    let isVideo = scene.includes("mp4") || scene.includes("mov");

                    return (
                        isVideo
                            ?
                            <VideoWrapper
                                videoId={"7JGvFIkD1Fk"}
                                iframeClassName={"rounded-3xl max-sm:h-fit"}
                                opts={{
                                    width: "100%",
                                    height: "700px"
                                }}
                            />
                            :
                            <Image
                                priority
                                quality={80}
                                key={index}
                                className={"rounded-3xl w-full max-sm:w-full object-cover"}
                                height={250}
                                width={400}
                                src={scene}
                                alt={scene}
                            />

                    )
                })
            }
        </>
    )
}