import React from 'react'
import { useMediaQuery } from 'react-responsive';

import useResolutions from '../hooks/useResolusions.ts'
import resStyles from '../funcs/resStyles.ts';
import styles from '../../App.module.scss';

import MainWindow from '../MainWindow.tsx'
import BigButton from '../BigButton.tsx';

function Block_1() {
    const resolutions = useResolutions()

    return (
        <>
            <div
                className={`
                ${styles.main_container} 
                ${resStyles('main_container', resolutions)}`}
            >
                <div className={`${styles.main_content_container} ${resStyles('content_box', resolutions)}`}>
                    <div className={`${styles.mobile_container} ${resStyles('mobile_container', resolutions)}`}>
                        <div className={styles.mobile_title}>Storm Shop</div>
                        <div className={styles.mobile_subtitle}>Лучший Магазин Дискорд Услуг!</div>
                        <BigButton sx={{ width: '160px', padding: '12px 100px', margin: '32px', fontSize: '24px' }} isGold={true}>
                            Купить!
                        </BigButton>
                    </div>
                    <div className={styles.main_container_text}>
                        <MainWindow />
                    </div>
                    <div className={`${styles.main_container_images} ${resStyles('main_container_images', resolutions)}`}>{/* Unused Element */}</div>
                </div>
            </div>
        </>
    )
};

export default Block_1