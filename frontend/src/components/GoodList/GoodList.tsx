// Базовые импорты
import { useContext, useEffect, useState } from 'react'
import { AxiosResponse } from 'axios';

// Стили
import styles from './styles.module.scss';
import resStyles from '../../utils/resStyles.js';
import useResolutions from '../../hooks/useResolusions';

// Компоненты & Хуки проекта
import Good from '../Good/Good'

// API импорты
import { APIContext } from '../../context/APIContext'

// Интерфейс для товара
import { GoodType } from '../../typings/Good'

export default function GoodList({ type = 'sub', q = "" }: { type?: string, q?: string }) {

    // Список товаров
    const [goodList, setGoodlist] = useState<GoodType[]>([]);

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    // Класс для работы с API
    const api = useContext(APIContext)!.api

    // Получить список товаров
    useEffect(() => {
        (async () => {
            if (type === 'sub') {
                const res = await api?.queryGoodList(type, q) as { data: AxiosResponse["data"] };
                setGoodlist(res!.data)
            } else if (type === 'script') {
                const res = await api?.queryGoodList(type, q) as { data: AxiosResponse["data"] };
                setGoodlist(res!.data)
            }
        })()
    }, [q, type])

    return (
        // Тэг для хранения списка товаров
        <section className={`${styles.container} ${resStyles('goodList', resolutions)} ${resStyles('container', resolutions)}`}>

            {/* Вывод списка товаров */}
            {
                goodList.length > 0 ? goodList.map(good =>
                    <Good
                        key={good.id}
                        desc={{
                            title: good.displayName,
                            subtitle: good.desc,
                            cost: good.cost,
                            image: good.imageUrl,
                            theme: good.themeColor,
                            rating: good.rating,
                            reviews: good.reviews,
                            old_cost: good.old_cost
                        }}
                    />
                ) : null
            }
        </section>
    )
}