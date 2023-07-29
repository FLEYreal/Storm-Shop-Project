// Базовые импорты
import React from 'react'
import { Helmet } from 'react-helmet';

// Стили
import styles from './styles/App.module.scss';
import './staticApp.css';
import resStyles from './utils/resStyles.ts';
import useResolutions from './hooks/useResolusions.ts';


// Импорт блоков сайта
import Block_1 from './components/blocks/App/Block_1.tsx';
import Block_2 from './components/blocks/App/Block_2.tsx';
import Block_3 from './components/blocks/App/Block_3.tsx';
import Block_4 from './components/blocks/App/Block_4.tsx';

export default function App(): JSX.Element {
    /* Определить размер экрана, возвращает true/false */
    const resolutions = useResolutions()

    return (
        <div className={`${styles.app}`}>

            {/* Установка тегов для описания страницы и CEO */}

            <Helmet>
                <title>StormShop: Магазин Нитро и не только!</title>
                <meta name="description" content="StormShop: Магазин дискорд услуг, а именно Нитро, Бейджики, Создание ботов и даже сайтов!" />
                <meta name="keywords" content='Нитро Nitro Дискорд Discord НитроШоп Купить нитро' />
                <meta httpEquiv="Content-Language" content="ru" />
                <meta name="author" content="FLEY" />
            </Helmet>

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
