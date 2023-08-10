// Базовые импорты
import MediaQuery from 'react-responsive';

// Стили
import styles from './styles.module.scss';
import resStyles from '../../../../utils/resStyles.js';
import useResolutions from '../../../../hooks/useResolusions.js';

// Компоненты & Хуки проекта
import VideoBot from '../subblocks/VideoBot.js';
import BotOrder from '../subblocks/BotOrder.js'
import ScriptListExample from '../subblocks/ScriptListExample.js'

// Картинки & Видео
import devider from '../../../img/devider.svg';
import ScriptShop from '../subblocks/ScriptShop.js';

export default function Block_4() {

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return (
        <>
            {/* Большие мониторы */}
            <MediaQuery minWidth={1171} >
                <section className={`${styles.botOrder}`}>
                    <div style={{ width: '100%', height: '600px', zIndex: '-1', position: 'absolute' }} className={`${styles.botOrder_bg}`}>

                    </div>
                    {/* Основной контент */}
                    <div className={`${styles.botOrder_container} ${resStyles('botOrder_container', resolutions)}`}>

                        {/* Вверхнаяя часть блока */}
                        <div className={`${styles.botOrder_top}`}>

                            {/* Подблок с описанием услуг заказа бота */}
                            <BotOrder />

                            {/* Разделитель между подблоками */}
                            <div className={`${styles.botOrder_devider}`}>
                                <img src={devider} alt='devider' />
                            </div>

                            {/* Подблок с описанием услуг готовых скриптов */}
                            <ScriptShop />

                        </div>

                        {/* Нижняя часть блока */}
                        <div className={`${styles.botOrder_bottom}`}>

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
                <section className={`${styles.botOrder_mid}`}>
                    <div className={`${styles.botOrder_mid_container}`}>
                        <div className={`${styles.botOrder_mid_container_top}`}>
                            <BotOrder />
                            <VideoBot />
                        </div>
                        <div className={`${styles.botOrder_mid_container_bottom}`}>
                            <ScriptListExample />
                            <ScriptShop />
                        </div>
                    </div>
                </section>
            </MediaQuery>


            {/* Маленькие мониторы / Экраны телефонов */}
            <MediaQuery maxWidth={920}>
                <section className={`${styles.botOrder_small}`}>
                    <div className={`${styles.botOrder_small_container}`}>
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