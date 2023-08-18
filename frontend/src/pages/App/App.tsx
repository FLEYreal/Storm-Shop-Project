// Базовые импорты
import { Helmet } from 'react-helmet';

// Стили
import styles from '../../styles/App.module.scss';
import '../../staticApp.css';
import resStyles from '../../utils/resStyles.ts';
import useResolutions from '../../hooks/useResolusions.ts';

// Импорт блоков сайта
import Block_1 from './Block_1/Block_1.tsx';
import Block_2 from './Block_2/Block_2.tsx';
import Block_3 from './Block_3/Block_3.tsx';
import Block_4 from './Block_4/Block_4.tsx';
import Block_5 from './Block_5/Block_5.tsx';
import Block_6 from './Block_6/Block_6.tsx';

export default function App(): JSX.Element {
    /* Определить размер экрана, возвращает true/false */
    const resolutions = useResolutions()

    return (
        <div className={`${styles.app}`}>

            {/* Установка тегов для описания страницы и CEO */}

            <Helmet>
                <title>StormShop: Подписки & Скрипты</title>
                <meta name="description" content="StormShop: Магазин Подписок и Скриптов, а также проект по созданию личных скриптов!" />
                <meta name="keywords" content='Нитро Nitro Дискорд Discord НитроШоп Купить нитро' />
                <meta httpEquiv="Content-Language" content="ru" />
                <meta name="author" content="FLEY" />
            </Helmet>

            {/* Различные отдельные элементы страницы */}

            <div className={`${styles.purple_light} ${resStyles('purple_light', resolutions)}`}></div> {/* Фиолетовое свечение */}
            <div className={`${styles.blue_light} ${resStyles('blue_light', resolutions)}`}></div> {/* Синее свечение */}
            <div className={`${styles.yellow_light} ${resStyles('yellow_light', resolutions)}`}></div> {/* Жёлтое свечение */}

            {/* Разные Блоки сайта */}

            <Block_1 />
            <Block_2 />
            <Block_3 />
            <Block_4 />
            <Block_5 />
            <Block_6 />
        </div>
    );
}
