// Базовые импорты
import { useContext } from 'react'
import MediaQuery from 'react-responsive';

// Стили
import styles from '../../../styles/App.module.scss'
import resStyles from '../../../utils/resStyles.js';
import useResolutions from '../../../hooks/useResolusions.js';

// Компоненты & Хуки проекта
import { StormButton } from '../../../styles/mui.js';
import VideoPlayer from '../../VideoPlayer.js';
import ScriptGood from '../../ScriptGood.js';

// API импорты
import { APIContext } from '../../../context/APIContext.js'

// Картинки & Видео
import tgIcon_small from '../../img/tgIcon_small.svg';
import discordIcon from '../../img/discordIcon.svg';
import devider from '../../img/devider.svg';
import chatGPT from '../../img/chatgpt-icon.svg';
import botReview from '../../video/botReview.mp4'

export default function Block_4() {

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    // Класс для работы с API 
    const api = useContext(APIContext)!.api

    return (
        <>
            {/* Большие мониторы */}
            <MediaQuery minWidth={1171} >
                <section className={`${styles.botOrder}`}>
                    <div style={{ width: '100%', height: '600px', zIndex: '-1', position: 'absolute' }} className={`${styles.botOrder_bg}`}>

                    </div>
                    {/* Основной контент */}
                    <div className={`${styles.botOrder_container} ${resStyles('botOrder_container', resolutions)}`}>

                        <div className={`${styles.botOrder_top}`}>

                            <div className={`${styles.botOrder_bots}`}>
                                <div className={`${styles.botOrder_desc}`}>
                                    <div className={`${styles.title} ${resStyles('title', resolutions)}`}>
                                        ЗАКАЗ <span className={styles.title_colorful}>БОТА</span>
                                    </div>
                                    <div className={`${styles.botOrder_subtitle} ${resStyles('botOrder_subtitle', resolutions)}`}>
                                        Хочешь заказать собственного бота для дискорда или телеграмма, тогда ты по адрессу!
                                    </div>
                                </div>
                                <StormButton className={`${styles.botOrder_button}`}>
                                    ЗАКАЗАТЬ
                                </StormButton>

                                {/* Картинки */}
                                <img src={tgIcon_small} className={`${styles.botOrder_tgIcon}`} alt='Telegram Icon' />
                                <img src={discordIcon} className={`${styles.botOrder_dcIcon}`} alt='Discord Icon' />

                            </div>

                            <div className={`${styles.botOrder_devider}`}>
                                <img src={devider} alt='devider' />
                            </div>

                            <div className={`${styles.botOrder_scripts}`}>
                                <div className={`${styles.botOrder_desc}`}>
                                    <div className={`${styles.title} ${resStyles('title', resolutions)}`}>
                                        ГОТОВЫЕ <span className={styles.title_colorful_yellow}>СКРИПТЫ</span>
                                    </div>
                                    <div className={`${styles.botOrder_subtitle} ${resStyles('botOrder_subtitle', resolutions)}`}>
                                        Мы также предлагаем магазин готовых
                                        скриптов и ботов, таких как скрипт для
                                        авто-покупки нитро на nodejs или готовый
                                        скрипт чата с chatGPT на C++
                                    </div>
                                    <a href='/' className={`${styles.botOrder_linkToShop}`}>Перейти в магазин</a>
                                </div>

                                {/* Картинки */}
                                <img src={chatGPT} className={`${styles.botOrder_GPTIcon}`} alt='ChatGPT Icon' />
                            </div>

                        </div>

                        <div className={`${styles.botOrder_bottom}`}>
                            <div className={`${styles.botOrder_videoBlock}`}>
                                <VideoPlayer
                                    src={botReview}
                                    doLoop={true}
                                    doControl={false}
                                    doStart={true}
                                    volume={0}
                                />
                            </div>
                            <div className={`${styles.botOrder_scriptsBlock}`}>
                                <span className={`${styles.botOrder_scriptsBlock_subtitle}`}>P.S. Эти скрипты случайно выбраны из магазина</span>
                                <ScriptGood desc={{
                                    title: 'Notification API',
                                    cost: 1499,
                                    theme: 'rgba(255, 186, 0, 1)',
                                    themeTransparent: 'rgba(255, 186, 0, 0.1)',
                                    desc: "Some Description of the Notification API which has to be long enough so this description couldn't fit and 3 dots appeared! Some Description of the Notification API which has to be long enough so this description couldn't fit and 3 dots appeared!"
                                }} />
                                <ScriptGood desc={{
                                    title: 'Notification API',
                                    cost: 1499,
                                    theme: 'rgba(255, 186, 0, 1)',
                                    themeTransparent: 'rgba(255, 186, 0, 0.1)',
                                    desc: "Some Description of the Notification API which has to be long enough so this description couldn't fit and 3 dots appeared! Some Description of the Notification API which has to be long enough so this description couldn't fit and 3 dots appeared!"
                                }} />
                            </div>
                        </div>
                    </div>
                </section>
            </MediaQuery>


            {/* Средние мониторы */}
            <MediaQuery maxWidth={1170} minWidth={921} >

            </MediaQuery>


            {/* Маленькие мониторы / Экраны телефонов */}
            <MediaQuery maxWidth={920}>

            </MediaQuery>
        </>
    )
}