// Стили
import styles from './styles.module.scss';
import resStyles from '../../../utils/resStyles.js';
import useResolutions from '../../../hooks/useResolusions.js';

// Картинки & Видео
import bubbles from '../../../components/img/bubbles3.png';
import { StormButton } from '../../../styles/mui.js';
import { Link } from 'react-router-dom';

function Block_5() {

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return (
        // Главный тэг для блока 5
        <div className={`${styles.job} ${resStyles('job', resolutions)}`}>

            {/* Основной контейнер для контента блока */}
            <div className={`${styles.container} ${resStyles('container', resolutions)}`}>

                {/* Тэг для текстового контента */}
                <div className={`${styles.text} ${resStyles('description', resolutions)}`}>

                    {/* Заголовок блока */}
                    <h2 className={`${resStyles('title', resolutions)}`}>ЗАРАБАТЫВАЙ ВМЕСТЕ С <b>StormShop</b></h2>

                    {/* Описание блока */}
                    <div className={`${styles.text_description} ${resStyles('subtitle', resolutions)}`}>

                        {/* Описание разбитое по параграфам */}
                        <p>
                            Мы предоставляем возможность ВСЕМ пользователям зарабатывать вместе с нами!
                        </p>
                        <p>
                            За каждого приведенного пользователя <span style={{ color: '#ffffff' }}>мы даём 100% прибыли от покупки!</span>
                        </p>
                        <p>
                            Вы не ослышались, именно 100%! Заинтересован? Тогда прочитай статью и регистрируйся у нас на сайте!
                        </p>
                    </div>

                    {/* Блок с кнопками действий */}
                    <div>
                        <Link to="/article/job"><StormButton className={`${resStyles('buttonFontSize', resolutions)}`} sx={{
                            zIndex: '1',
                            color: '#60F6FF',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',
                            flexShrink: '0',
                            borderRadius: '10px',
                            border: '3px solid #60F6FF',
                            background: 'rgba(96, 246, 255, 0.10)',
                            backdropFilter: 'blur(4px)',
                            p: '12px 32px',
                            m: '0',
                            mr: '20px',
                            mt: '15px',

                            '&:hover': {
                                border: '3px solid #60F6FF',
                                background: 'rgba(96, 246, 255, 0.2)'
                            }
                        }}>
                            Читать
                        </StormButton></Link>
                        <Link to="/signup">
                            <StormButton className={`${resStyles('buttonFontSize', resolutions)}`} sx={{
                                zIndex: '1',
                                color: '#F04EFF',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: 'normal',
                                flexShrink: '0',
                                borderRadius: '10px',
                                border: '3px solid #F04EFF',
                                background: 'rgba(240, 78, 255, 0.2)',
                                backdropFilter: 'blur(4px)',
                                p: '12px 32px',
                                m: '0',
                                mr: '20px',
                                mt: '15px',

                                '&:hover': {
                                    border: '3px solid #F04EFF',
                                    background: 'rgba(240, 78, 255, 0.2)'
                                }
                            }}>
                                Регистрация
                            </StormButton>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Декорация к блоку */}
            <img src={bubbles} className={`${styles.bubble} ${resStyles('job_bubble', resolutions)}`} />
        </div >
    );
}

export default Block_5;