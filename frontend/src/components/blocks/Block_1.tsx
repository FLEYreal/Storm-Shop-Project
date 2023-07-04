import React from 'react'
import { useMediaQuery } from 'react-responsive';

import useResolutions from '../hooks/useResolusions.ts'
import resStyles from '../funcs/resStyles.ts';
import styles from '../../App.module.scss';

import MainWindow from '../MainWindow.tsx'
import BigButton from '../BigButton.tsx';

function Block_1() {
    const {isBigScreen, isMidScreen, isSmallScreen, isPhone} = useResolutions()

    return (
        <>
        <div 
            className={`
            ${styles.main_container} 
            ${resStyles('main_container', {isBigScreen,isMidScreen,isSmallScreen,isPhone})}`
            }
        >
            <div className={`${styles.mobile_container} ${resStyles('mobile_container', {isBigScreen,isMidScreen,isSmallScreen,isPhone})}`}>
            <div className={styles.mobile_title}>Storm Shop</div>
            <div className={styles.mobile_subtitle}>Лучший Магазин Дискорд Услуг!</div>
            <BigButton sx={{width: '160px', padding: '8px 30px', margin: '16px', fontSize: '19px'}} isGold={true}>
                Купить!
            </BigButton>
            </div>
            <div className={styles.main_container_text}>
            <MainWindow/>
            </div>
            <div className={`${styles.main_container_images} ${resStyles('main_container_images', {isBigScreen,isMidScreen,isSmallScreen,isPhone})}`}>{/* Unused Element */}</div>
        </div>
        </>
    )
};
 
export default Block_1