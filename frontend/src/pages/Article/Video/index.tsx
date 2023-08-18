import VideoPlayer from '../../../components/VideoPlayer';
import styles from './styles.module.scss'

function Video({ route }: { route: string | undefined }) {
    return (
        <VideoPlayer
            className={`${styles.video}`}
            doStart={true}
            volume={0}
            doLoop={true}
            src={`${import.meta.env.VITE_BACKEND_IP}:${import.meta.env.VITE_BACKEND_PORT}${route}`} />
    );
}

export default Video;