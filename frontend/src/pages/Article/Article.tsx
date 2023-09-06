// Базовые скрипты
import { useContext, useEffect, useState, useRef } from 'react';
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
import Picture from './Picture';

function Article() {

    // Хуки
    const [article, setArticle] = useState<Article | null>(null)
    const [adBlockPosition, setAdBlockPosition] = useState<'static' | 'relative' | 'fixed' | 'absolute' | 'sticky' | undefined>('fixed');
    const boxRef = useRef<HTMLDivElement>(null);
    const adRef = useRef<HTMLDivElement>(null);
    const [positionFormula, setPositionFormula] = useState<string>(`${(window.innerWidth - 1170) / 2}px`)

    // Получить разрешение экрана
    const resolutions = useResolutions()

    // Получить параметр ссылки
    const { name } = useParams();

    // Получить класс для работы с API
    const api = useContext(APIContext)!.api

    useEffect(() => {
        if (
            resolutions.isBigScreen // If the screen is big
            && !resolutions.isMidScreen
            && !resolutions.isSmallScreen
            && !resolutions.isPhone) {
            setPositionFormula(`${(window.innerWidth - 1170) / 2}px`)
        }

        else if (
            !resolutions.isBigScreen
            && resolutions.isMidScreen // If the screen is middle
            && !resolutions.isSmallScreen
            && !resolutions.isPhone) {

            const percent = window.innerHeight / 100
            setPositionFormula(`${(window.innerHeight - (percent * 90)) / 2}px`)
        }

        else if (
            resolutions.isSmallScreen // If the screen is small
            && !resolutions.isPhone) {

            const percent = window.innerHeight / 100
            setPositionFormula(`${(window.innerHeight - (percent * 95)) / 2}px`)
        }
    }, [resolutions])

    useEffect(() => {
        (async () => {
            // Получить статью
            const res = await api!.getArticle(name!)
            setArticle(res.data)
        })()
    }, [])

    useEffect(() => {

        // Функция, срабатывающая при скролле
        const handleScroll = () => {

            // Если все нужные компоненты загрузились
            if (boxRef.current && adRef.current) {

                // Получить все нужные переменные
                const articleHeight = boxRef!.current!.offsetHeight;
                const adBlock = adRef!.current!;
                const adBlockHeight = adBlock!.offsetHeight;
                const scrollY = window.scrollY;

                // Если блок рекламы выходит запределы, то он не будет больше двигаться
                // В ином случае он будет зафиксирован на экране
                if ((articleHeight + 125) - (adBlockHeight + 125) < scrollY) {
                    setAdBlockPosition('absolute');
                } else {
                    setAdBlockPosition('fixed');
                }
            }
        }

        // Добавить отслежку ивента скролла
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Очистка
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className={`${styles.article}`}>
            {/* Все мета тэги в хедере */}
            <Helmet>
                <title>StormShop: {article?.display_name || "article"}</title>
                <meta name='description' content={`StormShop: ${article?.seo_description || "Article without description"}`} />
                <meta name="keywords" content='Нитро Nitro Дискорд Discord НитроШоп Купить нитро' />
            </Helmet>

            {/* Сама секция со статьями и рекламой */}
            <section ref={boxRef} className={`${styles.container} ${resStyles('container', resolutions)}`}>

                {/* Сама статья */}
                <article className={`${styles.content} ${resStyles('article_content', resolutions)}`}>

                    {
                        // Генерация статьи
                        article?.content.map((i, index) => {
                            if (i.type === 'title') return (<Title key={index}>{i.content}</Title>)

                            else if (i.type === 'p') return (<Text key={index}>{i.content}</Text>)

                            else if (i.type === 'small_title') return (<SmallTitle key={index}>{i.content}</SmallTitle>)

                            else if (i.type === 'small_p') return (<SmallText key={index}>{i.content}</SmallText>)

                            else if (i.type === 'image') return (<Picture key={index} route={i.url} alt={i.alt} />)

                            else if (i.type === 'video') return (<Video key={index} route={i.url} />)
                        })
                    }

                </article>

                {/* Секция с рекламой */}
                <section style={{
                    // Определить позиционирование блока, absolute или fixed
                    position: adBlockPosition,

                    // Определение отдаление от правой части, чтобы попадать внутрь основного контейнера
                    right: positionFormula,

                    // Определить отдаление в зависимости от значения позиционирования
                    top: adBlockPosition === 'absolute' && boxRef.current && adRef.current ?
                        `${Number((boxRef!.current!.offsetHeight + 125) - (adRef!.current!.offsetHeight + 125)) + 125}px` : ''
                }}
                ref={adRef}
                className={`${styles.ad} ${resStyles('article_ad', resolutions)}`}>

                </section>
            </section>
        </main>
    );
}

export default Article;