// Базовые импорты
import { useContext, useEffect, useState } from 'react'
import MediaQuery from 'react-responsive';
import { AxiosResponse } from 'axios';

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

    // Список скриптов
    const [scripts, setScripts] = useState<AxiosResponse["data"][]>([])

    // Класс для работы с API 
    const api = useContext(APIContext)!.api

    // Получить список из 2 рандомных скриптов
    useEffect(() => {(async () => {
        
        // Получить список скриптов с бекенда
        const res = await api?.getScriptList() as { data: AxiosResponse["data"] }

        // Загрузить в массив scripts 2 рандомных скрипта
        setScripts([
            res!.data[Math.floor(Math.random() * res!.data.length)],
            res!.data[Math.floor(Math.random() * res!.data.length)],
        ])
    })()}, []);
    

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
                                {
                                    scripts.map((i) =>
                                        <ScriptGood key={i.id} desc={{
                                            title: i.displayName,
                                            cost: i.cost,
                                            theme: i.themeColor,
                                            themeTransparent: i.themeTransparent,
                                            desc: i.desc
                                        }} />
                                    )
                                }
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