// Стили
import styles from './styles.module.scss';
import resStyles from '../../../../utils/resStyles.js';
import useResolutions from '../../../../hooks/useResolusions.js';

// Компоненты & Хуки проекта
import { StormButton } from '../../../../styles/mui.js';

// Картинки & Видео
import tgIcon_small from '../../../img/tgIcon_small.svg';
import discordIcon from '../../../img/discordIcon.svg';

function BotOrder() {
    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return (
        <div className={`${styles.botOrder} ${resStyles('botOrder_bots', resolutions)}`}>
            <div className={`${styles.botOrder_desc} ${resStyles('botOrder_desc', resolutions)}`}>
                <div className={`${styles.title} ${resStyles('title', resolutions)}`}>
                    ЗАКАЗ <span className={styles.title_colorful}>БОТА</span>
                </div>
                <div className={`${styles.subtitle} ${resStyles('subtitle', resolutions)}`}>
                    Хочешь заказать собственного бота для дискорда или телеграмма, тогда ты по адрессу!
                </div>
            </div>
            <StormButton className={`${styles.button} ${resStyles('botOrder_button', resolutions)} ${resStyles('buttonFontSize', resolutions)}`}>
                ЗАКАЗАТЬ
            </StormButton>

            {/* Картинки */}
            <img src={tgIcon_small} className={`${styles.tgIcon} ${resStyles('botOrder_tgIcon', resolutions)}`} alt='Telegram Icon' />
            <img src={discordIcon} className={`${styles.dcIcon} ${resStyles('botOrder_dcIcon', resolutions)}`} alt='Discord Icon' />

        </div>
    );
}

export default BotOrder;