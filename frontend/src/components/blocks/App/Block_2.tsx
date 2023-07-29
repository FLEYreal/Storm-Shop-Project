// Базовые импорты
import React from 'react'

// Стили
import styles from '../../../styles/App.module.scss'
import resStyles from '../../../utils/resStyles.ts';
import useResolutions from '../../../hooks/useResolusions.ts';

// Картинки
import tgIcon_small from '../../img/tgIcon_small.svg';
import discordIcon from '../../img/discordIcon.svg';
import plati from '../../img/plati.png';
import funpay from '../../img/funpay.png';


export default function Block_2() {

    // Получить объект с разрешением экрана
    const resolution = useResolutions()

    return (
        <section className={`${styles.other_networks} ${resStyles('other_networks', resolution)}`}>

            {/* Заголовок */}
            <div className={styles.net_title}>Покупайте, где вам <b style={{ fontWeight: '600' }}>удобнее</b>!</div>

            {/* Основной контент */}
            <article className={`${styles.net_big_items} ${resStyles('net_big_items', resolution)}`}>

                {/* Список ссылок на другие варианты покупки */}

                <div className={styles.net_big_item}>
                    <img src={tgIcon_small} style={{ width: '68px' }} alt='Telegram Icon' />
                    <a href='https://t.me/storm_nitro_shop_bot' target='_blank' rel='noreferrer noopener'>Телеграм Бот</a>
                </div>

                <div className={styles.net_big_item}>
                    <img src={discordIcon} style={{ width: '56px', padding: '6px' }} alt='Discord Icon' />
                    <a href='https://discord.gg/BNsV86yGQA' target='_blank' rel='noreferrer noopener'>Дискорд Сервер</a>
                </div>

                <div className={styles.net_big_item}>
                    <img src={funpay} style={{ width: '56px', borderRadius: '100%', padding: '6px' }} alt='FunPay Icon' />
                    <a href='https://funpay.com/users/2879263/' target='_blank' rel='noreferrer noopener'>FunPay</a>
                </div>

                <div className={styles.net_big_item}>
                    <img src={plati} style={{ width: '56px', borderRadius: '100%', padding: '6px' }} alt='Plati.market Icon' />
                    <a href='https://plati.io/itm/3753787' target='_blank' rel='noreferrer noopener'>Plati.market</a>
                </div>

            </article>
        </section>
    )
}