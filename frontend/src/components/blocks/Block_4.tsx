// Базовые импорты
import React, { useContext, useEffect, useState } from 'react'

// Стили
import styles from '../../styles/App.module.scss'
import resStyles from '../../utils/resStyles';
import useResolutions from '../../hooks/useResolusions';

// Компоненты & Хуки проекта
import SimpleButton from '../SimpleButton';

// API импорты
import { APIContext } from '../../context/APIContext'

// Картинки
import tgIcon_small from '../img/tgIcon_small.svg';
import discordIcon from '../img/discordIcon.svg';

function Block_4() {

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    // Класс для работы с API 
    const api = useContext(APIContext)!.api

    return (
        <>
            <section className={`${styles.botOrder}`}>

                {/* Основной контент */}
                <div className={`${styles.botOrder_container} ${resStyles('botOrder_container', resolutions)}`}>
                    {/* Картинки */}
                    <img src={tgIcon_small} className={`${styles.botOrder_tgIcon}`} alt='Telegram Icon' />
                    <img src={discordIcon} className={`${styles.botOrder_dcIcon}`} alt='Discord Icon' />
                    
                    <div className={`${styles.botOrder_desc} ${resStyles('botOrder_desc', resolutions)}`}>
                        <div className={`${styles.botOrder_title}`}>
                            ЗАКАЗ <span className={styles.title_colorful}>БОТА</span>
                        </div>
                        <div className={`${styles.botOrder_subtitle} ${resStyles('botOrder_subtitle', resolutions)}`}>
                            Хочешь заказать собственного бота для дискорда или телеграмма, тогда ты по адрессу!
                        </div>
                    </div>
                    <SimpleButton className={`${styles.botOrder_button}`} isGold={false}>
                        ЗАКАЗАТЬ
                    </SimpleButton>
                </div>

            </section>
        </>
    )
};

export default Block_4