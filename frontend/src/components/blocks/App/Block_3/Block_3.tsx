// Стили
import styles from './styles.module.scss';
import resStyles from '../../../../utils/resStyles.js';
import useResolutions from '../../../../hooks/useResolusions';

// Компоненты & Хуки проекта
import GoodList from '../../../GoodList/GoodList.js';

export default function Block_3() {
    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return (
        <>
            {/* Разделение между блоками */}
            <hr style={{ margin: '0 auto' }} className={`${resStyles('container', resolutions)}`}></hr>

            {/* Основной контент */}
            <section>

                {/* Заголовок */}
                <div className={`${styles.title} ${resStyles('container', resolutions)} ${resStyles('title', resolutions)}`}>
                    ТОВАРЫ:
                </div>

                {/* Тэг для хранения списка товаров */}
                <GoodList type='sub'/>
            </section>
        </>
    )
}