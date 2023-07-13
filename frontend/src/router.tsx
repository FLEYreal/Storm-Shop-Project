// Базовые импорты
import React, { useState, useRef, useEffect, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MediaQuery, { useMediaQuery } from 'react-responsive';

// Стили
import resStyles from './utils/resStyles.ts';
import useResolutions from './hooks/useResolusions.ts';
import styles from './styles/App.module.scss';

// Страницы
import App from './App.tsx';
import SignUp from './SignUp.tsx'
import LogIn from './LogIn.tsx';

// API импорты
import Api from './utils/Api.ts'
import { APIContext } from './context/APIContext.ts'
import { getUUID, checkUUID, findUUID } from './utils/UUID.ts';

// Компоненты & Хуки проекта
import SimpleButton from './components/SimpleButton';

// Импорт картинок
import logo512 from './components/img/logo512.png';

function RouterComp() {
    // Инициализация базовых переменных
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    // Референсы к тэгам
    const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Определить размер экрана, возвращает true/false
    const resolutions = useResolutions()
    const { isSmallScreen, isPhone } = useResolutions()



    // Получить UUID для пользователя и сохранить его в локальное хранилище браузера    
    useEffect((): void => {
        const isUUID = checkUUID();
        if (!isUUID) getUUID()
    }, [])


    // ФУНКЦИИ ДЛЯ МОБИЛЬНОГО МЕНЮ:

    // Хендлер для клика на кнопку бургер меню
    const handleClickBurger = () => {
        // Очистить таймер
        clearTimeout(menuTimeoutRef.current!);
        // Поставить противоположное состояние для меню
        setMenuVisible(!menuVisible);
    };

    // Хендлер для скрытия меню
    const handleHideMenu = (event: any) => {

        // Если размер экрана телефона или маленькое
        if (isSmallScreen || isPhone) {

            // Получить классы нажатого элемента
            const clickedElementClass = [...event.target.classList];

            // Найти классы бургер меню в массиве
            const array: string[] = clickedElementClass.filter((className: string) => className === 'click_detect');

            // Ничего не вернуть, если это не бургер меню
            if (array.length > 0) return;

            // Очистить таймер
            clearTimeout(menuTimeoutRef.current!);

            // Скрыть меню
            setMenuVisible(false);
        }
    }

    // Если мышка на меню
    const handleMouseEnter = () => {
        // Очистить таймер
        clearTimeout(menuTimeoutRef.current!);

        // Установить видимость меню на true
        setMenuVisible(true);
    };

    // Если мышка НЕ на меню
    const handleMouseLeave = () => {
        // Создать таймер по истечению которого меню пропадёт
        menuTimeoutRef.current = setTimeout(() => {
            setMenuVisible(false);
        }, 3000);
    };

    /* Отследить скрол в странице, чтобы к хедеру применились стили затемнения */
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 0 && !isScrolled) setIsScrolled(true); 
        else if (scrollTop === 0 && isScrolled) setIsScrolled(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <main onClick={handleHideMenu}>
            <APIContext.Provider value={{ api: new Api(findUUID() === '' ? getUUID() : findUUID()) }}>
                {/* Хедер сайта */}

                <header className={`${styles.header} ${styles[resStyles('header', resolutions)]} ${isScrolled ? styles.dark_header : ''}`}>
                    <div className={`${styles.header_content_container} ${resStyles('header_content_container', resolutions)}`}>
                        <div className={styles.header_container}>
                            <div className={styles.logo_container}>
                                <a href='/' className={styles.logoLink}>
                                    <img src={logo512} className={`${styles.logo512} ${styles.logo}`} alt="Logo" />
                                </a>Storm Shop
                            </div>
                            <MediaQuery maxWidth={920}>
                                <SimpleButton className='click_detect' isGold={true} sx={{
                                    fontSize: '25px',
                                    fontWeight: '900'
                                }} onClick={handleClickBurger}>
                                    ☰
                                </SimpleButton>
                            </MediaQuery>
                            <MediaQuery minWidth={1171}>
                                <nav className={styles.header_options_container}>
                                    <SimpleButton isGold={true}>Купить</SimpleButton>
                                    <SimpleButton isGold={true}>Заказать Бота</SimpleButton>
                                    <SimpleButton>Помощь</SimpleButton>
                                    <SimpleButton>Хочу заработать!</SimpleButton>
                                </nav>
                            </MediaQuery>
                            <MediaQuery minWidth={921} maxWidth={1170}>
                                <nav className={styles.header_options_container}>
                                    <SimpleButton sx={{ fontSize: '14px', padding: '8px 18px' }} isGold={true}>Купить</SimpleButton>
                                    <SimpleButton sx={{ fontSize: '14px', padding: '8px 18px' }} isGold={true}>Заказать Бота</SimpleButton>
                                    <SimpleButton sx={{ fontSize: '14px', padding: '8px 18px' }}>Помощь</SimpleButton>
                                    <SimpleButton sx={{ fontSize: '14px', padding: '8px 18px' }}>Хочу заработать!</SimpleButton>
                                </nav>
                            </MediaQuery>
                        </div>
                    </div>
                </header>

                {/* Бургер меню, для мобильных устройств */}

                <nav
                    ref={menuRef}
                    style={{ display: menuVisible ? 'flex' : 'none' }}
                    className={styles.burger_menu}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SimpleButton isGold={true} className={styles.burger_item}>Купить</SimpleButton>
                    <SimpleButton isGold={true} className={styles.burger_item}>Заказать Бота</SimpleButton>
                    <SimpleButton className={styles.burger_item}>Помощь</SimpleButton>
                    <SimpleButton className={styles.burger_item}>Хочу заработать!</SimpleButton>
                </nav>

                {/* Роуты */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/*" element={<App />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<LogIn />} />
                    </Routes>
                </BrowserRouter>
            </APIContext.Provider>
        </main>
    )
}

export default RouterComp;