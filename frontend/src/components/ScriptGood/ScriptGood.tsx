// Базовые импорты
import MediaQuery from 'react-responsive';

// Material-UI
import { Typography } from '@mui/material';

// Стили
import useResolutions from '../../hooks/useResolusions';
import resStyles from '../../utils/resStyles';
import styles from './styles.module.scss'

// Типы
import { ScriptGoodType } from '../../typings/Good';

// Компоненты & Функции и Хуки Проекта
import lighterRgb from '../../utils/lighterRGB';
import shortenText from '../../utils/shortenText';
import { StormButton } from '../../styles/mui';

function ScriptGood({ desc }: { desc: ScriptGoodType }) {

    // Инициализация базовых переменных
    const lighterTheme = lighterRgb(desc.themeTransparent, 0.25)
    const resolutions = useResolutions();
    const { isBigScreen, isMidScreen, isSmallScreen, isPhone } = useResolutions()

    // Определить размер описании в зависимости от размера экрана
    let shortDesc;
    if (isPhone) {
        shortDesc = shortenText(desc.desc, 64)
    } else if(isSmallScreen) {
        shortDesc = shortenText(desc.desc, 87)
    } else if (isMidScreen) {
        shortDesc = shortenText(desc.desc, 57)
    } else if (isBigScreen) {
        shortDesc = shortenText(desc.desc, 105)
    }

    return (
        <Typography component='div' className={`${styles.goodScript} ${resStyles('goodScript', resolutions)}`} sx={{
            background: desc.themeTransparent,
            border: `2px solid ${desc.theme}`
        }}>

            {/* Для больших экранов */}
            <MediaQuery minWidth={921}>
                {/* Левый блок товара */}
                <div className={`${styles.left}`}>

                    {/* Название и цена */}
                    <div className={`${styles.left_up}`}>
                        <h2 className={`${styles.left_up_title} ${resStyles('goodScript_left_up_title', resolutions)}`}>{desc.title}</h2>
                        <h3 className={`${styles.left_up_cost} ${resStyles('goodScript_left_up_cost', resolutions)}`}>{desc.cost}₽</h3>
                    </div>

                    {/* Кнопка Покупки */}
                    <StormButton variant='contained' className={`${styles.left_button} ${resStyles('goodScript_left_button', resolutions)}`} sx={{
                        background: desc.themeTransparent,
                        border: `2px solid ${desc.theme}`,
                        color: desc.theme,

                        '&:hover': {
                            background: lighterTheme,
                            border: `2px solid ${desc.theme}`,
                        }
                    }}>Купить</StormButton>
                </div>

                {/* Правый блок товара */}
                <div className={`${styles.right} ${resStyles('goodScript_right', resolutions)}`}>

                    {/* Описание товара */}
                    <div className={`${styles.right_description} ${resStyles('goodScript_right_description', resolutions)}`}>
                        {shortDesc}
                    </div>

                    {/* Кнопка для подробностей */}
                    <div className={`${resStyles('goodScript_right_more', resolutions)}`}>
                        <a href='/'>Узнать Подробнее</a>
                    </div>
                </div>
            </MediaQuery>

            {/* Для телефонов */}
            <MediaQuery maxWidth={920}>
                <div className={`${styles.mobile} ${resStyles('goodScript_mobile', resolutions)}`}>

                    {/* Вверхний блок товара */}
                    <div className={`${styles.mobile_up} ${resStyles('goodScript_mobile_up', resolutions)}`}>

                        {/* Название товара */}
                        <div className={`${styles.mobile_up_title} ${resStyles('goodScript_mobile_up_title', resolutions)}`}>
                            {desc.title}
                        </div>

                        {/* Цена товара */}
                        <div className={`${styles.mobile_up_cost} ${resStyles('goodScript_mobile_up_cost', resolutions)}`}>
                            {desc.cost}₽
                        </div>

                    </div>

                    {/* Центральный блок товара */}
                    <div className={`${styles.mobile_middle} ${resStyles('goodScript_mobile_middle', resolutions)}`}>
                        {shortDesc}
                    </div>

                    {/* Нижний блок товара */}
                    <div className={`${styles.mobile_bottom} ${resStyles('goodScript_mobile_bottom', resolutions)}`}>

                        {/* Блок ссылкой */}
                        <div className={`${styles.mobile_more} ${resStyles('goodScript_mobile_more', resolutions)}`}>
                            <a href='/' style={{fontSize: '15px', fontWeight: '600'}}>Узнать Подробнее</a>
                        </div>

                        {/* Кнопка покупки */}
                        <StormButton className={`${styles.mobile_buy} ${resStyles('goodScript_mobile_buy', resolutions)}`} sx={{
                            color: desc.theme,
                            textDecoration: 'underline',
                            fontSize: '16px',
                            fontWeight: '500',
                            margin: '0',
                            padding: '0',

                            '&:hover': {
                                textDecoration: 'none'
                            }
                        }}>Купить</StormButton>
                    </div>
                </div>
            </MediaQuery>
        </Typography>
    );
}

export default ScriptGood;