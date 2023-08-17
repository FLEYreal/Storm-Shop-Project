// Стили
import styles from './styles.module.scss';
import resStyles from '../../../utils/resStyles.js';
import useResolutions from '../../../hooks/useResolusions.js';

// Картинки & Видео
import chatGPT from '../../../components/img/chatgpt-icon.svg';

function ScriptShop() {
    // Получить объект с разрешением экрана
    const resolutions = useResolutions()
    const { isMidScreen, isPhone, isSmallScreen } = useResolutions()

    return (
        <div className={`${styles.scripts} ${resStyles('botOrder_scripts', resolutions)}`}>
            <div className={`${styles.scripts_desc} ${resStyles('botOrder_desc', resolutions)}`} style={
                isMidScreen && !isSmallScreen && !isPhone ? { width: '100%', marginBottom: '140px' } : {}
            }>
                <div className={`${styles.title} ${resStyles('title', resolutions)}`}>
                    ГОТОВЫЕ <span className={styles.title_colorful_yellow}>СКРИПТЫ</span>
                </div>
                <div className={`${styles.subtitle} ${resStyles('subtitle', resolutions)}`}>
                    Мы также предлагаем магазин готовых
                    скриптов и ботов, таких как скрипт для
                    авто-покупки нитро на nodejs или готовый
                    скрипт чата с chatGPT на C++
                </div>
                <a href='/' className={`${styles.linkToShop} ${resStyles('subtitle', resolutions)}`}>Перейти в магазин</a>
            </div>

            {/* Картинки */}
            <img src={chatGPT} className={`${styles.GPTIcon} ${resStyles('botOrder_GPTIcon', resolutions)}`} alt='ChatGPT Icon' />
        </div>
    );
}

export default ScriptShop;