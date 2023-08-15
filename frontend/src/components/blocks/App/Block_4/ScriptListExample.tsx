// Базовые импорты
import { useContext, useEffect, useState } from 'react'
import { AxiosResponse } from 'axios';

// Material-UI
import { IconButton } from '@mui/material'

// API импорты
import { APIContext } from '../../../../context/APIContext.js'

// Стили
import styles from './styles.module.scss';
import resStyles from '../../../../utils/resStyles.js';
import useResolutions from '../../../../hooks/useResolusions.js';

// Типы
import { GoodType } from '../../../../typings/Good.js'

// Импорты из проекта
import shortenText from '../../../../utils/shortenText.js';

interface GoodTypeWithWord extends GoodType {
    review_word:string;
}

export default function ScriptListExample() {
    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    // Список скриптов
    const [script, setScript] = useState<GoodTypeWithWord>({
        type: 'subscribtion',
        id: 1,
        name: 'name',
        displayName: 'displayName',
        desc: 'description',
        imageUrl: '/',
        themeColor: '#fff',
        cost: 100,
        old_cost: 100,
        reviews: 100,
        rating: 100,
        review_word: 'отзывов'
    })

    // Класс для работы с API 
    const api = useContext(APIContext)!.api

    // Получить список из 2 рандомных скриптов
    useEffect(() => {
        (async () => {
            // Получить список скриптов с бекенда
            const res = await api?.getScriptList() as { data: AxiosResponse["data"] }

            // Генерируем уникальный случайный индекс
            const index1 = Math.floor(Math.random() * res!.data.length);

            let review_word:string;
            const good:GoodType = res!.data[index1];

            // Сколнения слов в зависимости от количества отзывов
            if (String(good.reviews).endsWith('1')) review_word = 'отзыв'
            else if (
                String(good.reviews).endsWith('2') ||
                String(good.reviews).endsWith('3') ||
                String(good.reviews).endsWith('4')
            ) review_word = 'отзыва'
            else review_word = 'отзывов'

            // Загрузить рандомный скрипт
            setScript({
                ...good,
                review_word
            })
        })()
    }, []);

    function handleBuy() {
        console.log('Купить скрипт')
        // Будущий функионал для покупки скрипта
    }

    function handleReviews() {
        console.log('Отзывы от скрипта')
        // Будущий фунционал для просмотра отзывов
    }

    return (
        <div className={`${styles.scriptsBlock} ${resStyles('botOrder_scriptsBlock', resolutions)}`}>
            <span className={`${styles.scriptsBlock_subtitle} ${resStyles('botOrder_scriptsBlock_subtitle', resolutions)}`}>P.S. Этот скрипт был случайно выбран  из магазина</span>
            <div onClick={handleBuy} style={{ backgroundImage: `url('${import.meta.env.VITE_BACKEND_IP}:${import.meta.env.VITE_BACKEND_PORT}${script.imageUrl}')`, backgroundColor: '#7e7e7e' }} className={styles.scriptsBlock_banner}></div>
            <div className={styles.scriptsBlock_rightBlock}>
                <div className={styles.scriptsBlock_top} onClick={handleBuy}>
                    <div className={styles.scriptsBlock_cost_container}>
                        <div className={styles.scriptsBlock_cost} style={{ color: script.themeColor }}>{script.cost}₽</div>
                        <div className={styles.scriptsBlock_old_cost}>{script.old_cost !== undefined ? `${script.old_cost}₽` : <></>}</div>
                    </div>

                    {/* Контейнер с кнопкой корзины */}
                    <div>

                        {/* Сама кнопка */}
                        <IconButton>

                            {/* Векторная иконка */}
                            <svg fill={script.themeColor} xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                                <path
                                    d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
                            </svg>
                        </IconButton>
                    </div>
                </div>
                <div className={styles.scriptsBlock_middle} onClick={handleBuy}>
                    <div className={styles.scriptsBlock_title}>
                        {shortenText(script.displayName, 20)}
                    </div>
                    <div className={styles.scriptsBlock_desc}>
                        {shortenText(script.desc, 100)}
                    </div>
                </div>
                <div className={styles.scriptsBlock_bottom}>
                    {/* Звезда */}
                    <div className={styles.star}>
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0489 0.927049C11.3483 0.0057385 12.6517 0.00573993 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z" fill="#FFE600" />
                        </svg>
                    </div>

                    {/* Отображение рейтинга и отзывов */}
                    <div className={styles.reviews} onClick={handleReviews}>
                        {script.rating} · {script.reviews} {script.review_word}
                    </div>
                </div>
            </div>
        </div>
    );
}
