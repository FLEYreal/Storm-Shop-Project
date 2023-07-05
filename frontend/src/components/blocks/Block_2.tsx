import React from 'react'
import styles from '../../App.module.scss'
import { useMediaQuery } from 'react-responsive';

import resStyles from '../funcs/resStyles.ts';
import useResolutions from '../hooks/useResolusions.ts';

import tgIcon_small from '../img/tgIcon_small.svg';
import discordIcon from '../img/discordIcon.svg';
import plati from '../img/plati.png';
import funpay from '../img/funpay.png';


function Block_2() {
    const { isBigScreen, isMidScreen, isSmallScreen, isPhone } = useResolutions()

    return (
        <section>
            <div className={styles.other_networks}>
                <div className={styles.net_title}>Покупайте, где вам <b style={{ fontWeight: '600' }}>удобнее</b>!</div>
                <article className={styles.net_big_items}>
                    <div className={styles.net_big_item}>
                        <img src={tgIcon_small} style={{ width: '60px' }} alt='Telegram' />
                        <a href='https://t.me/storm_nitro_shop_bot' target='_blank'>Телеграм Бот</a>
                    </div>
                    <div className={styles.net_big_item}>
                        <img src={discordIcon} style={{ width: '55px' }} alt='Discord' />
                        <a href='https://discord.gg/BNsV86yGQA' target='_blank'>Дискорд Сервер</a>
                    </div>
                </article>
                <article className={styles.net_tiny_items}>
                    <div className={styles.net_tiny_item}>
                        <img src={funpay} style={{ width: '30px', borderRadius: '100%' }} alt='FunPay' />
                        <a href='https://funpay.com/users/2879263/' target='_blank'>FunPay</a>
                    </div>
                    <div className={styles.net_tiny_item}>
                        <img src={plati} style={{ width: '30px', borderRadius: '100%' }} alt='plati.market' />
                        <a href='https://plati.io/itm/3753787' target='_blank'>Plati.market</a>
                    </div>
                    <div className={styles.net_tiny_item}>
                        <img src={tgIcon_small} style={{ width: '30px', borderRadius: '100%' }} alt='tg поддержка' />
                        <a href='https://t.me/Nikita1264' target='_blank'>Поддержка в ТГ</a>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Block_2