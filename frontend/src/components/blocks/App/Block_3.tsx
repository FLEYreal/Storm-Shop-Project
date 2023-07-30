// Базовые импорты
import { useContext, useEffect, useState } from 'react'
import { AxiosResponse } from 'axios';

// Стили
import styles from '../../../styles/App.module.scss'
import resStyles from '../../../utils/resStyles';
import useResolutions from '../../../hooks/useResolusions';

// Компоненты & Хуки проекта
import Good from '../../Good'

// API импорты
import { APIContext } from '../../../context/APIContext'

// Интерфейс для товара
import { GoodType } from '../../../typings/Good'

export default function Block_3() {
    // Список товаров
    const [goodList, setGoodlist] = useState<GoodType[]>([]);

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    // Класс для работы с API
    const api = useContext(APIContext)!.api

    // Получить список товаров
    useEffect(() => {
        (async () => {
            const res = await api?.getSubList() as { data: AxiosResponse["data"] };
            setGoodlist(res!.data)
        })()
    }, [])

    return (
        <>
            {/* Разделение между блоками */}
            <hr style={{ margin: '0 auto' }} className={`${resStyles('hr', resolutions)}`}></hr>

            {/* Основной контент */}
            <section>

                {/* Заголовок */}
                <div className={`${styles.goodList_title} ${resStyles('goodList_title', resolutions)}`}>
                    ТОВАРЫ:
                </div>

                {/* Тэг для хранения списка товаров */}
                <div className={`${styles.goodList} ${resStyles('goodList', resolutions)}`}>

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
                                    themeTransparent: good.themeTransparent
                                }}
                            />
                        ) : null
                    }
                </div>
            </section>
        </>
    )
}