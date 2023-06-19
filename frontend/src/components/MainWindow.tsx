import React from 'react'
import styles from '../App.module.scss'
import { useMediaQuery } from 'react-responsive';

import BigButton from './BigButton.tsx';
import TransparentModal from './TransparentModal.tsx'

function MainWindow() {

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
        <TransparentModal classNames={`${styles.main_container_window} ${resStyles('main_container_window')}`}>
            <div className={`${styles.main_title} ${resStyles('main_title')}`}>
              Storm Shop - это
            </div>
            <div className={`${styles.main_subtitle} ${resStyles('main_subtitle')}`}>
              Магазин Дискорд Услуг!
            </div>
            <div className={`${styles.main_text} ${resStyles('main_text')}`}>
              <span style={{ color: '#f6ff71', textShadow: '#f6ff71 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>Nitro Full</span> за <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>99 рублей</span>, бейджик "<span style={{ color: '#53e645', textShadow: '#2bdb1b 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>Активный разработчик</span>" за <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>39 рублей</span> или свой собственный <span style={{ color: '#ffffff', textShadow: '#ffffff 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>БОТ</span> для <span style={{ color: '#aebaff', textShadow: '#94a4ff 1px 0px 10px' }}>ДС</span> и <span style={{ color: '#7cebff', textShadow: '#7cebff 1px 0px 10px' }}>ТГ</span>, а также многое другое можно найти у нас в магазине по самым демократичным ценам!
            </div>
            <div className={styles.main_buttons}>
              <BigButton isGold={true}>
                Купить!
              </BigButton>
              <BigButton>
                ОТЗЫВЫ
              </BigButton>
            </div>
        </TransparentModal>
    )
};
 
export default MainWindow