// Базовые импорты
import { useEffect } from 'react';

// Стили
import resStyles from '../../../utils/resStyles.ts';
import styles from './styles.module.scss';
import useResolutions from '../../../hooks/useResolusions.ts'

// Компоненты проекта
import { BlueButton, PinkButton } from '../../../styles/mui.ts';

// Картинки & Иконки
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import wampus from '../../../components/img/wampus.png';
import activeDeveloperBadge from '../../../components/img/activeDeveloperBadge.svg';
import nitroBadge from '../../../components/img/nitroBadge.svg';
import boostIcon from '../../../components/img/boostIcon.png';
import botIcon from '../../../components/img/botIcon.png';
import starIcon from '../../../components/img/starIcon.png';
import tgIcon_small from '../../../components/img/tgIcon_small.svg';
import bubble4 from '../../../components/img/bubbles4.png';
import tgIcon_big from '../../../components/img/tgIcon_big.svg';
import discordIcon from '../../../components/img/discordIcon.svg';
import chatGPT from '../../../components/img/chatgpt-icon.svg';
import spotify from '../../../components/img/spotify.svg';

export default function Block_1() {
    // Создание основных переменных
    const resolutions = useResolutions()
    const { isBigScreen, isMidScreen, isSmallScreen, isPhone } = useResolutions()

    useEffect(() => {
        // Если разрешение экрана не телефона
        if (!isPhone) {

            // Установить таймер
            const timer = setInterval(() => {

                // Создать контейнер для частиц
                const particlesContainer = document.getElementById('particles-container');

                // Создать элемент частицы
                const particle = document.createElement('img');

                // Получить рандомную картинку
                particle.src = getRandomBadgeImage();

                // Проверка размера экрана, после - определение положения частицы на сайте
                if (isSmallScreen) {

                    // Стили для определения положения
                    particle.style.left = `calc(50% - (${Math.floor(Math.random() * 100)}px))`;
                    particle.style.top = `450px`;

                }
                else if (isMidScreen) {

                    // Стили для определения положения
                    particle.style.right = `1${Math.floor((Math.random() * 8))}${Math.floor((Math.random() * 5))}px`;

                }
                else if (isBigScreen) {

                    // Стили для определения положения
                    particle.style.right = `1${Math.floor((Math.random() * 8))}${Math.floor((Math.random() * 9))}px`;

                }

                // Добавить нужные стили для частицы
                particle.className = `${styles.badgeRain} ${resStyles('badgeRain', resolutions)} ${getRandomBadgeClass()}`;

                // Вывести частицу на страницу
                particlesContainer!.appendChild(particle);

                // Удалить частицу после 10 секунд
                setTimeout(() => {
                    particlesContainer!.removeChild(particle);
                }, 10000);
            }, 250);

            return () => clearInterval(timer);
        }
    }, []);

    // Рандомайзер для КОМПОНЕНТОВ дождя из картинок под вампусом
    const getRandomBadgeImage = () => {
        // Массив картинок
        const images = [activeDeveloperBadge, nitroBadge, boostIcon, botIcon, starIcon, tgIcon_small];

        // Получить рандомную картинку
        const randomIndex = Math.floor(Math.random() * images.length);

        // Вернуть рандомную картинку
        return images[randomIndex];
    };

    // Рандомайзер для КЛАССОВ дождя из картинок под вампусом
    const getRandomBadgeClass = () => {
        // Получить классы анимаций для картинок
        const classes = ['badgeRain1', 'badgeRain2', 'badgeRain3', 'badgeRain4', 'badgeRain5'];

        // Получить рандомную анимацию
        const randomIndex = Math.floor(Math.random() * classes.length);

        // Вернуть рандомную анимацию
        return classes[randomIndex];
    };


    return (
        // Основной Контейнер
        <section className={styles.main}>

            {/* Контейнер с основным контентом */}
            <div className={`${styles.container} ${resStyles('container', resolutions)}`}>
                {isSmallScreen || isPhone ?
                    <>
                        <h1 className={`${resStyles('title', resolutions)}`}>
                            Storm Shop: <a href='/' style={{ color: '#FFD645', textDecoration: 'none' }}>Скрипты</a> <span style={{ color: '#96D9FF', textDecoration: 'none' }}>&</span> <a href='/' style={{ color: '#FF7BB3', textDecoration: 'none' }}>Подписки</a>
                        </h1>
                        <p className={`${styles.content} ${resStyles('subtitle', resolutions)}`}>
                            Покупай подписки в 2 клика! Создаёшь свой проект?
                            Покупай готовые скрипты у нас в магазине! Не нашёл? Бывает...
                            тогда закажи свой скрипт, бота или даже сайт!
                            <br /><a href='/' style={{ color: '#FF7BB3', fontWeight: '500' }}>Подписки</a>, <a href='/' style={{ color: '#FFD645', fontWeight: '500' }}>Магазин скриптов</a>, <a href='/' style={{ color: '#BAEAFF', fontWeight: '500' }}>Заказать себе</a>
                        </p>
                    </>
                    : <></>
                }


                {/* Контейнер с текстом */}
                <div className={`${styles.text} ${resStyles('main_text', resolutions)}`}>
                    {/* Заголовок сайта */}
                    {!isSmallScreen && !isPhone ?
                        <>
                            <h1 className={`${styles.title} ${resStyles('title', resolutions)}`}>
                                Storm Shop: <a href='/' style={{ color: '#FFD645', textDecoration: 'none' }}>Скрипты</a> <span style={{ color: '#96D9FF', textDecoration: 'none' }}>&</span> <a href='/' style={{ color: '#FF7BB3', textDecoration: 'none' }}>Подписки</a>
                            </h1>
                            {/* Основной контент */}
                            <p className={`${styles.content} ${resStyles('subtitle', resolutions)}`}>
                                Покупай подписки в 2 клика! Создаёшь свой проект?
                                Покупай готовые скрипты у нас в магазине! Не нашёл? Бывает...
                                тогда закажи свой скрипт, бота или даже сайт!
                                <br /><a href='/' style={{ color: '#FF7BB3', fontWeight: '500' }}>Подписки</a>, <a href='/' style={{ color: '#FFD645', fontWeight: '500' }}>Магазин скриптов</a>, <a href='/' style={{ color: '#BAEAFF', fontWeight: '500' }}>Заказать себе</a>
                            </p>
                            <p className={`${styles.content} ${resStyles('subtitle', resolutions)}`}>
                                Вы также можете зарабатывать вместе с нами! Загружай
                                свои скрипты и мы сами будем продавать их за вас!
                                Не умеешь программировать?
                            </p>
                            <p className={`${styles.content} ${resStyles('subtitle', resolutions)}`}>
                                Тогда невероятная реферальная программа. 100%
                                от прибыли с магазина!
                                <br /><a>Подробнее</a>
                            </p>
                            {/* Кнопки */}
                            <div className={`${styles.action} ${resStyles('main_action', resolutions)}`}>
                                <PinkButton className={`${resStyles('buttonFontSize', resolutions)}`} sx={{ padding: '10px 25px', fontWeight: '600' }} startIcon={<DiamondRoundedIcon style={{ marginRight: '4px' }} />}>ПОДПИСКИ</PinkButton>
                                <BlueButton className={`${resStyles('buttonFontSize', resolutions)}`} sx={{ padding: '10px 25px', fontWeight: '600' }} startIcon={<CodeRoundedIcon style={{ marginRight: '4px' }} />}>СКРИПТЫ</BlueButton>
                            </div>
                        </>
                        : <></>
                    }
                </div>

                {/* Картинки */}
                <img src={wampus} className={`${styles.wampus} ${resStyles('wampus', resolutions)}`} alt="Wampus" />
                <img src={tgIcon_big} className={`${styles.tgIcon_big} ${resStyles('tgIcon_big', resolutions)}`} alt="Telegram Icon" />
                <img src={discordIcon} className={`${styles.discordIcon} ${resStyles('discordIcon', resolutions)}`} alt="Discord Icon" />
                <img src={bubble4} className={`${styles.bubble4} ${resStyles('bubble4', resolutions)}`} alt="Bubble 4 icon" />

                <img src={bubble4} className={`${styles.bubble4_1} ${resStyles('bubble4_1', resolutions)}`} alt="Bubble 4.1 icon" />
                <img src={chatGPT} className={`${styles.chatGPT} ${resStyles('chatGPT', resolutions)}`} alt="ChatGPT icon" />
                <img src={spotify} className={`${styles.spotify} ${resStyles('spotify', resolutions)}`} alt="ChatGPT icon" />

                <div id="particles-container" className={styles.particlesContainer}></div>
            </div>

        </section>
    )
}