// Стили
import styles from './styles.module.scss';
import resStyles from '../../../utils/resStyles.js';
import useResolutions from '../../../hooks/useResolusions.js';

// Иконки
import money from '../../../components/icons/money.svg'
import person from '../../../components/icons/person.svg'
import piggy from '../../../components/icons/piggy.svg'
import speed from '../../../components/icons/speed.svg'

function Block_6() {
    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return ( 
        <section className={`${styles.benefits}`}>
            <div className={`${styles.container} ${resStyles('container', resolutions)}`}>
                {/* Заголовок блока */}
                <h2 className={`${resStyles('title', resolutions)}`}>ПОЧЕМУ <b style={{color: '#F04EFF'}}>МЫ</b>?</h2>

                <div className={`${styles.item} ${resStyles('description', resolutions)}`}>
                    <img src={speed} alt='speed icon'/>
                    <p style={{color: '#F04EFF'}} className={`${resStyles('subtitle', resolutions)}`}>
                        Скорость - мы выдаём Подписки и Скрипты в минимальные сроки, мы постараемся ответить в течении нескольких минут!
                    </p>
                </div>
                <div className={`${styles.item} ${resStyles('description', resolutions)}`}>
                    <img src={piggy} alt='piggy icon'/>
                    <p style={{color: '#F2B61A'}} className={`${resStyles('subtitle', resolutions)}`}>
                        У нашего магазина одни из самых дешевых цен благодаря автоматизации, также, у нас есть скидки, купоны и реферальные программы!
                    </p>
                </div>
                <div className={`${styles.item} ${resStyles('description', resolutions)}`}>
                    <img src={money} alt='money icon'/>
                    <p style={{color: '#5BC834'}} className={`${resStyles('subtitle', resolutions)}`}>
                        Наш магазин даёт возможность всем желающим зарабатывать вместе с нами, 100% прибыли с реферальной программы!
                    </p>
                </div>
                <div className={`${styles.item} ${resStyles('description', resolutions)}`}>
                    <img src={person} alt='person icon'/>
                    <p style={{color: '#44A3D8'}} className={`${resStyles('subtitle', resolutions)}`}>
                        У нас понимающая и отзывчивая тех поддержка, вы всегда можете обращатся к нам по интересующим вас вопросам, в том числе и о сотрудничестве!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Block_6;