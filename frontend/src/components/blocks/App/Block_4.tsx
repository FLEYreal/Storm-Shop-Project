// Базовые импорты
import MediaQuery from 'react-responsive';

// Стили
import styles from '../../../styles/App.module.scss'
import resStyles from '../../../utils/resStyles.js';
import useResolutions from '../../../hooks/useResolusions.js';

// Компоненты & Хуки проекта
import VideoBot from './subblocks/VideoBot.js';
import BotOrder from './subblocks/BotOrder.js'
import ScriptListExample from './subblocks/ScriptListExample.js'

// Картинки & Видео
import devider from '../../img/devider.svg';
import ScriptShop from './subblocks/ScriptShop.js';

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

                        <div className={`${styles.botOrder_top}`}>

                            <BotOrder/>

                            <div className={`${styles.botOrder_devider}`}>
                                <img src={devider} alt='devider' />
                            </div>

                            <ScriptShop/>

                        </div>

                        <div className={`${styles.botOrder_bottom}`}>
                            <VideoBot />
                            <ScriptListExample/>
                        </div>
                    </div>
                </section>
            </MediaQuery>


            {/* Средние мониторы */}
            <MediaQuery maxWidth={1170} minWidth={921} >

            </MediaQuery>


            {/* Маленькие мониторы / Экраны телефонов */}
            <MediaQuery maxWidth={920}>

            </MediaQuery>
        </>
    )
}