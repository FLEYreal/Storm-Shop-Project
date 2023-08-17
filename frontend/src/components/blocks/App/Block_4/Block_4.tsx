// Базовые импорты
import MediaQuery from 'react-responsive';

// Стили
import styles from './styles.module.scss';
import resStyles from '../../../../utils/resStyles.js';
import useResolutions from '../../../../hooks/useResolusions.js';

// Компоненты & Хуки проекта
import VideoBot from './VideoBot.js';
import BotOrder from './BotOrder.js'
import ScriptListExample from './ScriptListExample.js'
import ScriptShop from './ScriptShop.js';

// Картинки & Видео
import devider from '../../../img/devider.svg';

export default function Block_4() {

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return (
        <>
            {/* Большие мониторы */}
            <MediaQuery minWidth={1171} >
                <section className={`${styles.big}`}>
                    <div style={{ width: '100%', height: '600px', zIndex: '-1', position: 'absolute' }} className={`${styles.backgound}`}>

                    </div>
                    {/* Основной контент */}
                    <div className={`${styles.container} ${resStyles('container', resolutions)}`}>

                        {/* Вверхнаяя часть блока */}
                        <div className={`${styles.top}`}>

                            {/* Подблок с описанием услуг заказа бота */}
                            <BotOrder />

                            {/* Разделитель между подблоками */}
                            <div className={`${styles.devider}`}>
                                <img src={devider} alt='devider' />
                            </div>

                            {/* Подблок с описанием услуг готовых скриптов */}
                            <ScriptShop />

                        </div>

                        {/* Нижняя часть блока */}
                        <div className={`${styles.bottom}`}>

                            {/* Подблок с видео примером работы бота */}
                            <VideoBot />

                            {/* Подблок с 2 рандомными скриптами для примера */}
                            <ScriptListExample />
                        </div>
                    </div>
                </section>
            </MediaQuery>


            {/* Средние мониторы */}
            <MediaQuery maxWidth={1170} minWidth={921} >
                <section className={`${styles.middle}`}>
                    <div className={`${styles.middle_container} ${resStyles('container', resolutions)}`}>
                        <div className={`${styles.middle_top}`}>
                            <BotOrder />
                            <VideoBot />
                        </div>
                        <div className={`${styles.middle_bottom}`}>
                            <ScriptShop />
                            <ScriptListExample />
                        </div>
                    </div>
                </section>
            </MediaQuery>


            {/* Маленькие мониторы / Экраны телефонов */}
            <MediaQuery maxWidth={920}>
                <section className={`${styles.small}`}>
                    <div className={`${styles.small_container} ${resStyles('container', resolutions)}`}>
                        <BotOrder />
                        <VideoBot />
                        <ScriptShop />
                        <ScriptListExample />
                    </div>
                </section>
            </MediaQuery>
        </>
    )
}