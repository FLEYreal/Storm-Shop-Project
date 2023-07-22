// Базовые импорты
import { useEffect } from 'react';
// mport { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';

// Стили
import styles from './styles/App.module.scss';
import './staticApp.css';
import resStyles from './utils/resStyles.ts';
import useResolutions from './hooks/useResolusions.ts';


// Импорт блоков сайта
import Block_1 from './components/blocks/Block_1';
import Block_2 from './components/blocks/Block_2';
import Block_3 from './components/blocks/Block_3';
import Block_4 from './components/blocks/Block_4';

// Импорт картинок
// import bubble1 from './components/img/bubbles.png';

function App(): JSX.Element {
    /* Определить размер экрана, возвращает true/false */
    const resolutions = useResolutions()

    return (
        <div className={`${styles.app}`}>

            {/* Установка тегов для описания страницы и CEO */}

            <Helmet>
                <title>StormShop: Магазин Нитро и не только!</title>
                <meta name="description" content="StormShop: Магазин дискорд услуг, а именно Нитро, Бейджики, Создание ботов и даже сайтов!" />
                <meta name="keywords" content='Нитро Nitro Дискорд Discord НитроШоп Купить нитро'/>
                <meta http-equiv="Content-Language" content="ru" />
                <meta name="author" content="FLEY"/>
            </Helmet>


            {/* Все картинки, дизайн, у всех position: absolute; */}

            <div className={`${styles.absolute_content} ${resStyles('absolute_content', resolutions)}`}>
                {/* 
                <img src={bubble4} className={`${styles.bubble4} ${resStyles('bubble4', resolutions)}`} alt="Bubble 4" />
                <img src={wampus} className={`${styles.wampus} ${resStyles('wampus', resolutions)}`} alt="Wampus" />
                <img src={tgIcon_big} className={`${styles.tgIcon_big} ${resStyles('tgIcon_big', resolutions)}`} alt="Telegram Icon" />
                <img src={discordIcon} className={`${styles.discordIcon} ${resStyles('discordIcon', resolutions)}`} alt="Discord Icon" />
                <img src={bubble4} className={`${styles.bubble4_1} ${resStyles('bubble4_1', resolutions)}`} alt="Bubble 4.1" />
                */}
            </div>

            {/* Различные отдельные элементы страницы */}
            <div className={`${styles.purple_light} ${resStyles('purple_light', resolutions)}`}></div> {/* Фиолетовое свечение */}
            <div className={`${styles.blue_light} ${resStyles('blue_light', resolutions)}`}></div> {/* Синее свечение */}

            {/* Разные Блоки сайта */}

            <Block_1 />
            <Block_2 />
            <Block_3 />
            <Block_4 />
        </div>
    );
}

export default App;
