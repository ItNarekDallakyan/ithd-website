import {FC} from "react";
import {useAppDispatch} from "@hooks/toolkit";
import {useMainSelector} from "@store/selectors";
import {setActiveVideoPlayer} from "@store/reducers/MainReducer";
import dynamic from "next/dynamic";

// @ts-ignore
const Youtube = dynamic(() => import("react-youtube"), {
    ssr: false
});

export const VideoWrapper: FC<any> = (
    {
        iframeClassName,
        className,
        videoId,
        opts
    }
) => {

    const dispatch = useAppDispatch();
    const {activeVideoPlayer} = useMainSelector();

    const handleVideoPlay = (event: any) => {
        let {g} = event.target;
        if (activeVideoPlayer && activeVideoPlayer !== g) {
            var iframeSrc = activeVideoPlayer.src;
            activeVideoPlayer.src = iframeSrc;
        }
        dispatch(setActiveVideoPlayer(g));
    }

    return (
        <Youtube
            opts={opts}
            onPlay={handleVideoPlay}
            iframeClassName={iframeClassName}
            className={className}
            videoId={videoId}
        />
    )
}