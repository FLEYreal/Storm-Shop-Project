// Базовые имопрты
import React from 'react'

// Стили
import resStyles from '../utils/resStyles'
import styles from '../styles/App.module.scss'
import useResolutions from '../hooks/useResolusions'

// Компоненты & Хуки проекта
import SimpleButton from './SimpleButton'
import shortenText from '../utils/shortenText'
import lighterRgb from '../utils/lighterRGB'

// Интерфейс для описания товара
interface Description {
     title:string,
     subtitle:string
     cost:string | number,
     image:string,
     theme:string,
     themeTransparent:string
}

function Good({desc}:{desc:Description}) {

     // Получить все переменные описания товара
     let { themeTransparent, theme, title, subtitle, cost, image } = desc;

     // Получить объект с разрешением экрана
     const resolutions = useResolutions()

     // Укоротить текст описания
     subtitle = shortenText(subtitle, 60)

     // Получить менее прозрачный фон
     const lighterBg = lighterRgb(themeTransparent, 0.25)

     return (
          <div className={`${styles.goodItem} ${resStyles('goodItem', resolutions)}`}>

               {/* Вывести картинку */}
               <div style={{backgroundImage: `url('${import.meta.env.VITE_BACKEND_IP}:${import.meta.env.VITE_BACKEND_PORT}${image}')`}} className={styles.goodItem_image}></div>

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
               <SimpleButton sx={{color: theme, border: `2px solid ${theme}`, backgroundColor: themeTransparent, '&:hover': {
                    backgroundColor: lighterBg,
                    boxShadow: 'none',
                },}} className={styles.goodItem_buyButton}>Купить</SimpleButton>
                
          </div>
     )
};

export default Good 