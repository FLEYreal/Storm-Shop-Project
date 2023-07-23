// Базовые имопрты
import React, { useState } from 'react'

// Стили
import resStyles from '../utils/resStyles'
import styles from '../styles/App.module.scss'
import useResolutions from '../hooks/useResolusions'

// Компоненты & Хуки проекта
import { StormButton } from '../styles/mui.js';
import shortenText from '../utils/shortenText'
import lighterRgb from '../utils/lighterRGB'

// Material-UI
import CircularProgress from '@mui/material/CircularProgress';

// Интерфейс для описания товара
interface Description {
    title: string,
    subtitle: string
    cost: string | number,
    image: string,
    theme: string,
    themeTransparent: string
}

export default function Good({ desc }: { desc: Description }) {

    // Получить все переменные описания товара
    const [isLoading, setIsLoading] = useState(false)
    const { themeTransparent, theme, title, cost, image } = desc;
    let { subtitle } = desc;

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    // Укоротить текст описания
    subtitle = shortenText(subtitle, 60)

    // Получить менее прозрачный фон
    const lighterBg = lighterRgb(themeTransparent, 0.25)

    // Функция, обработчик кнопки "Купить"
    function handleBuy() {
        setIsLoading(true)
    }

    return (
        <div className={`${styles.goodItem} ${resStyles('goodItem', resolutions)}`}>

            {/* Вывести картинку */}
            <div style={{ backgroundImage: `url('${import.meta.env.VITE_BACKEND_IP}:${import.meta.env.VITE_BACKEND_PORT}${image}')` }} className={styles.goodItem_image}></div>

            {/* Вывести заголовок и цену */}
            <div className={styles.goodItem_top}>
                <div className={styles.goodItem_title}>{title}</div>
                <div className={styles.goodItem_cost}>{cost} ₽</div>
            </div>

            {/* Вывести описание и ссылку на продолжение */}
            <div className={styles.goodItem_middle}>
                <div className={styles.goodItem_subtitle}>{subtitle}</div>
                <div className={styles.goodItem_readMore}>
                    <a href={'/'}>Узнать подробнее</a>
                </div>
            </div>

            {/* Кнопка для покупки */}
            <StormButton
                onClick={handleBuy}
                loading={isLoading}
                loadingIndicator={
                    isLoading ? (
                        <React.Fragment>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <CircularProgress size={10} style={{ color: theme, marginRight: '8px' }} />{' '}
                                {/* Иконка загрузки с белым цветом */}
                                <span style={{ color: theme, fontSize: '14px' }}>Загрузка...</span>
                                {/* Текст "Загрузка..." с белым цветом */}
                            </div>
                        </React.Fragment>
                    ) : (
                        'Загрузка...'
                    )
                }
                variant="outlined"
                sx={{
                    color: theme, // Убедитесь, что у вас определена переменная theme
                    border: `2px solid ${theme}`,
                    backgroundColor: themeTransparent,
                    '&:hover': {
                        border: `2px solid ${theme}`,
                        backgroundColor: lighterBg,
                        boxShadow: 'none',
                    },
                    display: 'flex', // Используем flexbox
                    alignItems: 'center', // Выравнивание по вертикали
                    justifyContent: 'center', // Выравнивание по горизонтали
                }}
                className={styles.goodItem_buyButton}
            >
                Купить
            </StormButton>

        </div>
    )
}