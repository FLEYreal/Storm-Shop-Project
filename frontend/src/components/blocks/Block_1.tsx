import React from 'react'
import { useMediaQuery } from 'react-responsive';

import styles from '../../App.module.scss';

import MainWindow from '../MainWindow.tsx'
import BigButton from '../BigButton.tsx';

function Block_1() {
    const isBigScreen = useMediaQuery({minWidth: 1340})
    const isMidScreen = useMediaQuery({maxWidth: 1340})
    const isSmallScreen = useMediaQuery({maxWidth: 920})
    const isPhone = useMediaQuery({maxWidth: 640})

    function resStyles(name:string) {
        switch (true) {
          case isPhone: return styles[name + '_p'];
          case isSmallScreen: return styles[name + '_s'];
          case isMidScreen: return styles[name + '_m'];
          case isBigScreen: return styles[name + '_b'];
          default: return '';
        }
      }  

    return (
        <>
        <div 
            className={`
            ${styles.main_container} 
            ${resStyles('main_container')}`
            }
        >
            <div className={`${styles.mobile_container} ${resStyles('mobile_container')}`}>
            <div className={styles.mobile_title}>Storm Shop</div>
            <div className={styles.mobile_subtitle}>Лучший Магазин Дискорд Услуг!</div>
            <BigButton sx={{width: '160px', padding: '8px 30px', margin: '16px', fontSize: '19px'}} isGold={true}>
                Купить!
            </BigButton>
            </div>
            <div className={styles.main_container_text}>
            <MainWindow/>
            </div>
            <div className={`${styles.main_container_images} ${resStyles('main_container_images')}`}>{/* Unused Element */}</div>
        </div>
        </>
    )
};
 
export default Block_1