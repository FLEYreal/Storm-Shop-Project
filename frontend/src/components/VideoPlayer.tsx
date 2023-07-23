import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
    styles?: React.CSSProperties;
    className?: string;
    doControl?: boolean;
    doLoop?: boolean;
    doStart?: boolean;
    volume?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    styles,
    className,
    doControl = false,
    doLoop = false,
    doStart = false,
    volume = 50,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        videoElement.controls = doControl;
        videoElement.loop = doLoop;
        videoElement.volume = volume / 100;

        if (doStart) videoElement.play();

    }, [doControl, doLoop, doStart, volume]);

    return (
        <video ref={videoRef} src={src} style={styles} className={className} />
    );
};

export default VideoPlayer;