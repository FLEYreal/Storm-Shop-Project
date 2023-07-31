// Стили
import styles from '../../../styles/App.module.scss'
import resStyles from '../../../utils/resStyles.js';
import useResolutions from '../../../hooks/useResolusions.js';

// Картинки & Видео
import bubbles from '../../img/bubbles3.png';
import { StormButton } from '../../../styles/mui.js';

function Block_5() {

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return (
        // Главный тэг для блока 5
        <div className={`${styles.job} ${resStyles('job', resolutions)}`}>

            {/* Основной контейнер для контента блока */}
            <div className={`${styles.job_container} ${resStyles('job_container', resolutions)}`}>

                {/* Тэг для текстового контента */}
                <div className={`${styles.job_text} ${resStyles('job_text', resolutions)}`}>

                    {/* Заголовок блока */}
                    <div className={`${resStyles('job_text_title', resolutions)}`}>
                        <h2 className={`${resStyles('title', resolutions)}`}>ЗАРАБАТЫВАЙ ВМЕСТЕ С <b>StormShop</b></h2>
                    </div>

                    {/* Описание блока */}
                    <div className={`${styles.job_text_description} ${resStyles('job_text_description', resolutions)}`}>

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
                        <StormButton sx={{
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

                            '&:hover': {
                                border: '3px solid #60F6FF',
                                background: 'rgba(96, 246, 255, 0.2)'
                            }
                        }}>
                            Читать
                        </StormButton>
                        <StormButton sx={{
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

                            '&:hover': {
                                border: '3px solid #F04EFF',
                                background: 'rgba(240, 78, 255, 0.2)'
                            }
                        }}>
                            Регистрация
                        </StormButton>
                    </div>
                </div>
            </div>

            {/* Декорация к блоку */}
            <img src={bubbles} className={`${styles.job_bubble} ${resStyles('job_bubble', resolutions)}`} />
        </div >
    );
}

export default Block_5;