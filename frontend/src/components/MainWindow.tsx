import React from 'react'
import styles from '../styles/App.module.scss'
import MediaQuery from 'react-responsive';

import useResolutions from '../hooks/useResolusions.ts'
import resStyles from '../utils/resStyles.ts';

import BigButton from './BigButton.tsx';
import TransparentModal from './TransparentModal.tsx'

function MainWindow() {
    const resolutions = useResolutions()

    return (
        <TransparentModal classNames={`${styles.main_container_window} ${resStyles('main_container_window', resolutions)}`}>
                <div>
                    <h1 className={`${styles.main_title} ${resStyles('main_title', resolutions)}`}>Storm Shop - это</h1>
                </div>
                <div>
                    <h2 className={`${styles.main_subtitle} ${resStyles('main_subtitle', resolutions)}`}>Магазин Нитро и иных Дискорд Услуг!</h2>
                </div>
            <article className={`${styles.main_text} ${resStyles('main_text', resolutions)}`}>
                <span style={{ color: '#f6ff71', textShadow: '#f6ff71 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>Nitro Full</span> за <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>99 рублей</span>, бейджик "<span style={{ color: '#53e645', textShadow: '#2bdb1b 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>Активный разработчик</span>" за <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>39 рублей</span> или свой собственный <span style={{ color: '#ffffff', textShadow: '#ffffff 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>БОТ</span> для <span style={{ color: '#aebaff', textShadow: '#94a4ff 1px 0px 10px' }}>ДС</span> и <span style={{ color: '#7cebff', textShadow: '#7cebff 1px 0px 10px' }}>ТГ</span>, а также многое другое можно найти у нас в магазине по самым демократичным ценам!
            </article>
            <div className={styles.main_buttons}>
                <MediaQuery minWidth={1171}>
                    <BigButton sx={{ marginRight: '16px', marginLeft: '0', fontSize: '20px' }} isGold={true}>
                        Купить
                    </BigButton>
                    <BigButton sx={{ marginRight: '16px', marginLeft: '0', fontSize: '20px' }}>
                        Отзывы
                    </BigButton>
                </MediaQuery>
                <MediaQuery maxWidth={1170}>
                    <BigButton sx={{ marginRight: '12px', marginLeft: '0', fontSize: '19px', padding: '8px' }} isGold={true}>
                        Купить
                    </BigButton>
                    <BigButton sx={{ marginRight: '12px', marginLeft: '0', fontSize: '19px', padding: '8px' }}>
                        Отзывы
                    </BigButton>
                </MediaQuery>
            </div>
        </TransparentModal>
    )
};

export default MainWindow