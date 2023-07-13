// Базовые импорты
import React from 'react'
import { useMediaQuery } from 'react-responsive';

// Стили
import resStyles from '../../utils/resStyles.ts';
import styles from '../../styles/App.module.scss';
import useResolutions from '../../hooks/useResolusions.ts'

// Компоненты & Хуки проекта
import MainWindow from '../MainWindow.tsx'
import BigButton from '../BigButton.tsx';

function Block_1() {
    
    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return (
        <section
            className={`
            ${styles.main_container} 
            ${resStyles('main_container', resolutions)}`}
        >
            {/* Основной контейнер */}
            <div className={`${styles.main_content_container} ${resStyles('main_content_container', resolutions)}`}>

                {/* Для телефонов */}
                <div className={`${styles.mobile_container} ${resStyles('mobile_container', resolutions)}`}>

                    {/* Заголовок и описание */}
                    <div className={styles.mobile_title}>Storm Shop</div>
                    <div className={styles.mobile_subtitle}>Лучший Магазин Нитро и иных Дискорд Услуг!</div>

                    {/* Кнопка для покупки */}
                    <BigButton sx={{ width: '160px', padding: '12px 100px', margin: '32px', fontSize: '24px' }} isGold={true}>
                        Купить!
                    </BigButton>
                </div>

                {/* Основное окно с текстом */}
                <div className={styles.main_container_text}>
                    <MainWindow />
                </div>

                {/* Unused Element */}
                {/* <div className={`${styles.main_container_images} ${resStyles('main_container_images', resolutions)}`}></div> */}
            </div>
        </section>
    )
};

export default Block_1