// Стили
import styles from './styles.module.scss';
import resStyles from '../../../../utils/resStyles.js';
import useResolutions from '../../../../hooks/useResolusions.js';

// Компоненты & Хуки проекта
import VideoPlayer from '../../../VideoPlayer.js';

// Картинки & Видео
import botReview from '../../../video/botReview.mp4'


function VideoBot() {
    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return (
        <div className={`${styles.videoBlock} ${resStyles('botOrder_videoBlock', resolutions)}`}>
            <VideoPlayer
                src={botReview}
                doLoop={true}
                doControl={false}
                doStart={true}
                volume={0}
            />
        </div>
    );
}

export default VideoBot;