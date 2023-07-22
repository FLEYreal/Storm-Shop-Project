// Стили
import resStyles from '../../utils/resStyles.ts';
import styles from '../../styles/App.module.scss';
import useResolutions from '../../hooks/useResolusions.ts'

// Компоненты проекта
import { BlueButton, PinkButton } from '../../styles/mui';

// Картинки & Иконки
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';

export default function Block_1() {
    // Создание основных переменных
    const resolutions = useResolutions()

    return (
        // Основной Контейнер
        <section className={styles.main}>

            {/* Контейнер с основным контентом */}
            <div className={`${styles.main_container} ${resStyles('main_container', resolutions)}`}>

                {/* Контейнер с текстом */}
                <div className={`${styles.main_text} ${resStyles('main_text', resolutions)}`}>
                    {/* Заголовок сайта */}
                    <h1 className={`${styles.main_title} ${resStyles('main_title', resolutions)}`}>
                        Storm Shop: <a href='/' style={{ color: '#FFD645', textDecoration: 'none' }}>Скрипты</a> <span style={{ color: '#96D9FF', textDecoration: 'none' }}>&</span> <a href='/' style={{ color: '#FF7BB3', textDecoration: 'none' }}>Подписки</a>
                    </h1>
                    {/* Основной контент */}
                    <p className={`${styles.main_content} ${resStyles('main_content', resolutions)}`}>
                        Покупай подписки в 2 клика! Создаёшь свой проект?
                        Покупай готовые скрипты у нас в магазине! Не нашёл? Бывает...
                        тогда закажи свой скрипт, бота или даже сайт!
                        <br /><a href='/' style={{ color: '#FF7BB3', fontWeight: '500' }}>Подписки</a>, <a href='/' style={{ color: '#FFD645', fontWeight: '500' }}>Магазин скриптов</a>, <a href='/' style={{ color: '#BAEAFF', fontWeight: '500' }}>Заказать себе</a>
                    </p>
                    <p className={`${styles.main_content} ${resStyles('main_content', resolutions)}`}>
                        Вы также можете зарабатывать вместе с нами! Загружай
                        свои скрипты и мы сами будем продавать их за вас!
                        Не умеешь программировать?
                    </p>
                    <p className={`${styles.main_content} ${resStyles('main_content', resolutions)}`}>
                        Тогда невероятная реферальная программа. 100%
                        от прибыли с магазина!
                        <br /><a>Подробнее</a>
                    </p>
                    {/* Кнопки */}
                    <div className={`${styles.main_action} ${resStyles('main_action', resolutions)}`}>
                        <PinkButton sx={{padding: '10px 25px', fontSize: '21px', fontWeight: '600'}} startIcon={<DiamondRoundedIcon style={{ marginRight: '4px' }} />}>ПОДПИСКИ</PinkButton>
                        <BlueButton sx={{padding: '10px 25px', fontSize: '21px', fontWeight: '600'}} startIcon={<CodeRoundedIcon style={{ marginRight: '4px' }} />}>СКРИПТЫ</BlueButton>
                    </div>
                </div>

            </div>

        </section>
    )
}