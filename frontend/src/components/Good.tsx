import React from 'react'
import resStyles from '../utils/resStyles'
import styles from '../styles/App.module.scss'

import SimpleButton from './SimpleButton'
import shortenText from '../utils/shortenText'

interface Description {
     title:string,
     subtitle:string
     cost:string | number,
     image:string,
     theme:string,
     themeTransparent:string
}

function Good({desc}:{desc:Description}) {
     let { themeTransparent, theme, title, subtitle, cost, image } = desc;

     subtitle = shortenText(subtitle, 60)

     return (
          <div className={styles.goodItem}>
               <div style={{backgroundImage: `url('${process.env.REACT_APP_BACKEND_IP}:${process.env.REACT_APP_BACKEND_PORT}${image}')`}} className={styles.goodItem_image}></div>
               <div className={styles.goodItem_top}>
                    <div className={styles.goodItem_title}>{title}</div>
                    <div className={styles.goodItem_cost}>{cost}</div>
               </div>
               <div className={styles.goodItem_middle}>
                    <div className={styles.goodItem_subtitle}>{subtitle}</div>
                    <div className={styles.goodItem_readMore}>
                         <a href={'/'}>Узнать подробнее</a>
                    </div>
               </div>
               <SimpleButton sx={{color: theme, border: `2px solid ${theme}`, backgroundColor: themeTransparent}} className={styles.goodItem_buyButton}>Купить</SimpleButton>
          </div>
     )
};

export default Good 