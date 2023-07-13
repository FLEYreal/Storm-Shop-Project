// Базовые импорты
import React, { useCallback, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';

// Стили
import styles from './styles/App.module.scss'

// API импорты
import { APIContext } from './context/APIContext'

// Библиотеки
import ReCAPTCHA from "react-google-recaptcha";

// Компоненты & Хуки проекта
import ModalFail from './components/ModalFail/index.jsx'
import ModalSuccess from './components/ModalSuccess/index.jsx'
import SimpleButton from './components/SimpleButton'

function SignUp() {
    // Базовые переменные
    const navigate = useNavigate();

    // Получить класс для работы с API
    const api = useContext(APIContext)!.api

    // Капча
    const captchaSiteKey: string = '6LeKRR4nAAAAAFsP7Qr_dCWczScuENUI1P7d4pf6';
    const [captchaValue, setCaptchaValue] = useState("");

    // Логин / Пароль
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Модальное окно с ошибкой
    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState('')

    // Успешное модальное окно
    const [isSuccessOpen, setIsSuccessOpen] = useState(false)
    const [modalSuccessContent, setModalSuccessContent] = useState('')

    // Функция закрытия модального окна
    function onClose() {
        setIsOpen(false)
        setIsSuccessOpen(false)
    }

    // Функция для регистрации пользователя (Активируется при нажатии кнопки "Зарегестрироваться")
    const onSignUp = useCallback(async () => {
        // Проверить наличие пройденной капчи
        if (!captchaValue) {
            // Вывести ошибку через модальное окно
            setModalContent("Пожалуйста, пройдите капчу");
            setIsOpen(true);

            return;

        }

        // Отправить запрос на бекенд 
        let resultRaw = await api!.signUp({
            username: username,
            password: password,
            recaptchaToken: captchaValue
        });

        // Получть ответ сервера
        let result = resultRaw.data;

        // Если пришла ошибка
        if (result.success === false || result.succeed === false) {
            // Вывести ошибку через модальное окно
            setModalContent(result.error);
            setIsOpen(true);
        }

        // Если всё хорошо
        else {
            // Вывести успешное модальное окно
            setModalSuccessContent('Успешная регистрация!')
            setIsSuccessOpen(true)
        }
    }, [api, captchaValue, password, username]);

    return (
        <>

            {/* Установка тегов для описания страницы и CEO */}

            <Helmet>
                <title>StormShop: Регистрация</title>
                <meta name="description" content="Страница регистрации на сайте магазина NitroStorm" />
                <meta name="keywords" content='регистрация Нитро Nitro Дискорд Discord НитроШоп Купить нитро логин' />
                <meta http-equiv="Content-Language" content="ru" />
                <meta name="author" content="FLEY" />
            </Helmet>

            .

            {/* Модальное окно с ошибкой */}
            <ModalFail isOpen={isOpen} onClose={onClose}>
                {modalContent}
            </ModalFail>

            {/* Успешное модальное окно */}
            <ModalSuccess styles={{
                content: {
                    fontSize: '24px'
                }
            }} isOpen={isSuccessOpen} onClose={onClose}>
                {modalSuccessContent}
                <SimpleButton onClick={() => navigate('/')} sx={{
                    marginTop: '16px',
                    background: 'none',
                    border: '2px solid #fff',
                    '&:hover': {
                        background: 'none',
                        boxShadow: 'none'
                    }
                }}>Вернутся на главную</SimpleButton>
            </ModalSuccess>

            {/* Основной контент */}
            <div className={styles.signup_container}>

                {/* Заголовок */}
                <div className={styles.signup_title}>Зарегестрируйся на Nitro Storm!</div>

                {/* Подзаголовок */}
                <div className={styles.signup_subtitle}><b>Зачем?</b> - Мы сможем подсчитать вашу статистику, отследить покупки и платить вам прибыль!</div>

                {/* Форма регистрации */}
                <div className={styles.signup_form}>

                    {/* Имя пользователя */}
                    <label htmlFor='username'>НИК:</label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} id='username' />

                    {/* Пометка */}
                    <span style={{ fontSize: '16px' }}>Разрешено использовать только латиницу [a-z,A-Z], цифры и "_" </span>

                    {/* Пароль */}
                    <label htmlFor='password'>ПАРОЛЬ: </label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} id='password' />

                    {/* Пометки */}
                    <span style={{ fontSize: '16px' }}>Пароль должен быть не меньше 16 символов и не больше 32! </span>
                    <span style={{ fontSize: '16px', color: 'red' }}>Восстановить пароль нельзя! Сохрани его себе куда-нибудь!</span>

                    {/* Капча */}
                    <div>
                        <ReCAPTCHA
                            sitekey={captchaSiteKey}
                            onChange={(value: string | null) => {
                                if (value) {
                                    setCaptchaValue(value);
                                }
                            }}
                        />
                    </div>

                    <br></br>

                    {/* Кнопка для регистрации */}
                    <SimpleButton onClick={onSignUp}>Зарегестрироваться</SimpleButton>
                </div>
            </div>
        </>
    )
};

export default SignUp