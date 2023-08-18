// Базовые скрипты
import { useContext, useEffect, useState } from 'react';
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

// Компоненты статьи
import Title from './Title';
import Text from './Text';
import SmallTitle from './SmallTitle';
import SmallText from './SmallText';
import Video from './Video';

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

            <section className={`${styles.container} ${resStyles('container', resolutions)}`}>
                <article className={`${styles.content} ${resStyles('article_content', resolutions)}`}>
                    <Title>Title of the page!</Title>
                    <SmallTitle>Small Title of the page!</SmallTitle>
                    <Text>Text of the page!</Text>
                    <SmallText>Small Text of the page!</SmallText>
                    <Video route='/public/videos/example.mp4' />
                </article>
                <section className={`${styles.ad} ${resStyles('article_ad', resolutions)}`}>

                </section>
            </section>
        </main>
    );
}

export default Article;