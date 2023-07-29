// Базовые импорты
import MediaQuery from 'react-responsive';

// Material-UI
import { Typography } from '@mui/material';

// Стили
import useResolutions from '../hooks/useResolusions';
import resStyles from '../utils/resStyles';
import styles from '../styles/App.module.scss'

// Типы
import { ScriptGoodType } from '../typings/Good';

// Компоненты & Функции и Хуки Проекта
import lighterRgb from '../utils/lighterRGB';
import shortenText from '../utils/shortenText';
import { StormButton } from '../styles/mui';

function ScriptGood({ desc }: { desc: ScriptGoodType }) {

    // Инициализация базовых переменных
    const lighterTheme = lighterRgb(desc.themeTransparent, 0.25)
    const shortDesc = shortenText(desc.desc, 105)
    const resolutions = useResolutions();

    return (
        <Typography component='div' className={`${styles.goodScript}`} sx={{
            background: desc.themeTransparent,
            border: `2px solid ${desc.theme}`
        }}>

            {/* Для больших экранов */}
            <MediaQuery minWidth={921}>
                {/* Левый блок товара */}
                <div className={`${styles.goodScript_left}`}>

                    {/* Название и цена */}
                    <div className={`${styles.goodScript_left_up}`}>
                        <h2 className={`${styles.goodScript_left_up_title}`}>{desc.title}</h2>
                        <h3 className={`${styles.goodScript_left_up_cost}`}>{desc.cost}₽</h3>
                    </div>

                    {/* Кнопка Покупки */}
                    <StormButton variant='contained' className={`${styles.goodScript_left_button}`} sx={{
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
                <div className={`${styles.goodScript_right}`}>

                    {/* Описание товара */}
                    <div className={`${styles.goodScript_right_description}`}>
                        {shortDesc}
                    </div>

                    {/* Кнопка для подробностей */}
                    <div className={`${styles.goodScript_right_more}`}>
                        <a href='/'>Узнать Подробнее</a>
                    </div>
                </div>
            </MediaQuery>

            {/* Для телефонов */}
            <MediaQuery maxWidth={920}>

            </MediaQuery>
        </Typography>
    );
}

export default ScriptGood;