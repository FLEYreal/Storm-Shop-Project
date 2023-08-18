// Базовые скрипты
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// API импорты
import { APIContext } from '../../context/APIContext'

// Типы
import { Article } from '../../typings/Article';

// Стили
import resStyles from '../../utils/resStyles';
import useResolutions from '../../hooks/useResolusions';
import styles from './styles.module.scss'

function Article() {

    // Получить разрешение экрана
    const resolutions = useResolutions()

    // Статья
    const [article, setArticle] = useState<Article | null>(null)

    // Получить параметр ссылки
    const { name } = useParams();

    // Получить класс для работы с API
    const api = useContext(APIContext)!.api

    useEffect(() => {
        (async () => {
            // Получить статью
            const res = await api!.getArticle(name!)
            setArticle(res.data)
        })()
    }, [])

    return (
        <main className={`${styles.article}`}>
            <Helmet>
                <title>StormShop: {article?.display_name || "article"}</title>
                <meta name='description' content={`StormShop: ${article?.seo_description || "Article without description"}`} />
                <meta name="keywords" content='Нитро Nitro Дискорд Discord НитроШоп Купить нитро' />
            </Helmet>

            {/* {
                article?.content.map(i => {

                })
            } */}

            <article className={`${styles.container} ${resStyles('container', resolutions)}`}>
                <p className={`${styles.title} ${resStyles('title', resolutions)}`}>Title of the page!</p>
                <p className={`${styles.small_title} ${resStyles('smallTitle', resolutions)}`}>Small Title of the page!</p>
                <p className={`${styles.text} ${resStyles('subtitle', resolutions)}`}>Text of the page!</p>
                <p className={`${styles.small_text} ${resStyles('smallSubtitle', resolutions)}`}>Small Text of the page!</p>
            </article>
        </main>
    );
}

export default Article;