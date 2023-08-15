// Стили
import resStyles from '../../utils/resStyles.js'
import styles from './styles.module.scss'
import useResolutions from '../../hooks/useResolusions.js'

// Компоненты & Хуки проекта
import shortenText from '../../utils/shortenText.js'

// Интерфейс для описания товара
import { GoodDescType } from '../../typings/Good.js'
import { IconButton } from '@mui/material';

export default function Good({ desc }: { desc: GoodDescType }) {

    // Получить все переменные описания товара
    const { theme, cost, image, rating, reviews, old_cost } = desc;
    let { title } = desc;
    let review_word: string;

    // Сколнения слов в зависимости от количества отзывов
    if (String(reviews).endsWith('1')) review_word = 'отзыв'
    else if (
        String(reviews).endsWith('2') ||
        String(reviews).endsWith('3') ||
        String(reviews).endsWith('4')
    ) review_word = 'отзыва'
    else review_word = 'отзывов'

    // Получить разрешение экрана
    const { isBigScreen, isMidScreen, isSmallScreen, isPhone } = useResolutions()

    console.log(isBigScreen, isMidScreen, isSmallScreen, isPhone)

    // Укоротить текст описания
    title = shortenText(title, 38)

    return (
        <>
            {
                (isBigScreen || isMidScreen) && (!isSmallScreen && !isPhone) ?
                    <div className={`${styles.item}`}>

                        {/* Вывести картинку */}
                        <div style={{ backgroundImage: `url('${import.meta.env.VITE_BACKEND_IP}:${import.meta.env.VITE_BACKEND_PORT}${image}')`, backgroundColor: '#515151' }} className={styles.item_image}></div>

                        {/* Вывести заголовок и цену */}
                        <div className={styles.item_top}>
                            <div className={styles.cost_container}>
                                <div className={styles.cost} style={{ color: theme }}>{cost} ₽</div>
                                <div className={styles.old_cost}>{old_cost !== undefined ? `${old_cost} ₽` : <></>}</div>
                            </div>

                            {/* Контейнер с кнопкой корзины */}
                            <div>

                                {/* Сама кнопка */}
                                <IconButton>

                                    {/* Векторная иконка */}
                                    <svg fill={theme} xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                                        <path
                                            d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
                                    </svg>
                                </IconButton>
                            </div>

                        </div>

                        {/* Середина товара & Название товара */}
                        <div className={styles.item_middle}>
                            <div className={styles.title}>{title}</div>
                        </div>

                        {/* Нижняя часть страницы, отзывы и оценка товара */}
                        <div className={styles.item_bottom}>

                            {/* Звезда */}
                            <span className={styles.star}>
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0489 0.927049C11.3483 0.0057385 12.6517 0.00573993 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z" fill="#FFE600" />
                                </svg>
                            </span>

                            {/* Отображение рейтинга и отзывов */}
                            <span className={styles.reviews}>{rating} · {reviews} {review_word}</span>
                        </div>

                    </div> : null
            }
            {
                isSmallScreen || isPhone ?
                    <div className={styles.item_phone}>
                        {/* Вывести картинку */}
                        <div style={{ backgroundImage: `url('${import.meta.env.VITE_BACKEND_IP}:${import.meta.env.VITE_BACKEND_PORT}${image}')`, backgroundColor: '#515151' }} className={styles.item_phone_image}>

                        </div>
                        <div className={styles.item_phone_top}>
                            <div className={styles.cost_phone} style={{ color: theme }}>{cost} ₽</div>
                            <div className={styles.old_cost_phone}>{old_cost !== undefined ? `${old_cost} ₽` : <></>}</div>
                        </div>
                        <div className={styles.item_phone_middle}>
                            <div className={styles.title_phone}>
                                {title}
                            </div>
                        </div>
                        <div className={styles.item_phone_bottom}>
                            {/* Звезда */}
                            <div className={styles.star_phone}>
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0489 0.927049C11.3483 0.0057385 12.6517 0.00573993 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z" fill="#FFE600" />
                                </svg>
                            </div>

                            {/* Отображение рейтинга и отзывов */}
                            <div className={styles.reviews_phone}>
                                {rating} · {reviews} {review_word}
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}