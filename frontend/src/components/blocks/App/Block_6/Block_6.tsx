// Стили
import styles from './styles.module.scss';
import resStyles from '../../../../utils/resStyles.js';
import useResolutions from '../../../../hooks/useResolusions.js';

// Иконки
import money from '../../../icons/money.svg'
import person from '../../../icons/person.svg'
import piggy from '../../../icons/piggy.svg'
import speed from '../../../icons/speed.svg'

function Block_6() {
    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return ( 
        <section className={`${styles.benefits}`}>
            <div className={`${styles.container} ${resStyles('container', resolutions)}`}>
                <div className={`${styles.item}`}>
                    <img src={speed} alt='speed icon'/>
                    <p style={{color: '#F04EFF'}}>
                        Скорость - мы выдаём Нитро в минимальные сроки, мы постараемся ответить в течении нескольких минут!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Block_6;