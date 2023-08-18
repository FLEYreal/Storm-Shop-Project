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

    // Получить разрешение экрана
    const resolutions = useResolutions()

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

    useEffect(() => {
        const handleScroll = () => {
            if (boxRef.current && adRef.current) {
                const articleHeight = boxRef!.current!.offsetHeight;
                const adBlock = adRef!.current!;
                const adBlockHeight = adBlock!.offsetHeight;
                const scrollY = window.scrollY;

                if ((articleHeight + 125) - (adBlockHeight + 125) < scrollY) {
                    setAdBlockPosition('absolute');
                } else {
                    setAdBlockPosition('fixed');
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className={`${styles.article}`}>
            <Helmet>
                <title>StormShop: {article?.display_name || "article"}</title>
                <meta name='description' content={`StormShop: ${article?.seo_description || "Article without description"}`} />
                <meta name="keywords" content='Нитро Nitro Дискорд Discord НитроШоп Купить нитро' />
            </Helmet>

            {/* {
                article?.content.map(i => {
                    if(i.type === 'title') {
                        return ()
                    }
                })
            } */}

            <section ref={boxRef} className={`${styles.container} ${resStyles('container', resolutions)}`}>
                <article className={`${styles.content} ${resStyles('article_content', resolutions)}`}>
                    <Title>Title of the page!</Title>
                    <SmallTitle>Small Title of the page!</SmallTitle>
                    <Text>Text of the page!</Text>
                    <SmallText>Small Text of the page!</SmallText>
                    <Video route='/public/videos/example.mp4' />
                    <Picture route='/public/images/example.png' alt='Example Image'/>
                </article>


                <section style={{ 
                    position: adBlockPosition, 
                    right: `${(window.innerWidth - 1170) / 2}px`,
                    top: adBlockPosition === 'absolute' && boxRef.current && adRef.current ? 
                        `${Number((boxRef!.current!.offsetHeight + 125) - (adRef!.current!.offsetHeight + 125)) + 125}px` : ''
                }} ref={adRef} className={`${styles.ad} ${resStyles('article_ad', resolutions)}`}>

                </section>
            </section>
        </main>
    );
}

export default Article;