import React from 'react'
import styles from '../../App.module.scss'
import { useMediaQuery } from 'react-responsive';

import tgIcon_small from '../img/tgIcon_small.svg';
import discordIcon from '../img/discordIcon.svg';
import plati from '../img/plati.png';
import funpay from '../img/funpay.png';


function Block_2() {
    
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
            <div className={styles.other_networks}>
                <div className={styles.net_title}>Покупайте, где вам <b style={{fontWeight: '600'}}>удобнее</b>!</div>
                <div className={styles.net_big_items}>
                    <div className={styles.net_big_item}>
                        <img src={tgIcon_small} style={{width: '60px'}} alt='Telegram'/>
                        <a href='https://t.me/storm_nitro_shop_bot' target='_blank'>Телеграм Бот</a>
                    </div>
                    <div className={styles.net_big_item}>
                        <img src={discordIcon} style={{width: '55px'}} alt='Discord'/>
                        <a href='https://discord.gg/BNsV86yGQA' target='_blank'>Дискорд Сервер</a>
                    </div>
                </div>

                {/* <div className={styles.net_tiny_title}>Наши Другие Площадки!</div> */}
                <div className={styles.net_tiny_items}>
                    <div className={styles.net_tiny_item}>
                        <img src={funpay} style={{width: '30px', borderRadius: '100%'}} alt='FunPay'/>
                        <a href='https://funpay.com/users/2879263/' target='_blank'>FunPay</a>
                    </div>
                    <div className={styles.net_tiny_item}>
                        <img src={plati} style={{width: '30px', borderRadius: '100%'}} alt='plati.market'/>
                        <a href='https://plati.io/itm/3753787' target='_blank'>Plati.market</a>
                    </div>
                    <div className={styles.net_tiny_item}>
                        <img  src={tgIcon_small} style={{width: '30px', borderRadius: '100%'}} alt='tg поддержка'/>
                        <a href='https://t.me/Nikita1264' target='_blank'>Поддержка в ТГ</a>
                    </div>
                </div>
            </div>
        </>
    )
};
 
export default Block_2