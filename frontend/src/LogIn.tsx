// Базовые импорты
import { useCallback, useState, useContext } from 'react'
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
import { StormButton, PinkButton } from './styles/mui.js';

export default function LogIn() {
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

    // Функция для логина пользователя (Активируется при нажатии кнопки "Войти")
    const onLogin = useCallback(async () => {
        // Проверить наличие пройденной капчи
        if (!captchaValue) {

            // Вывести ошибку через модальное окно
            setModalContent("Пожалуйста, пройдите капчу");
            setIsOpen(true);

            return;

        }

        // Отправить запрос на бекенд 
        const resultRaw = await api!.login({
            username: username,
            password: password,
            recaptchaToken: captchaValue
        })

        // Получить ответ сервера
        const result = resultRaw.data

        // Если пришла ошибка
        if (result.success === false || result.succeed === false) {
            // Вывести ошибку через модальное окно
            setModalContent(result.error);
            setIsOpen(true);
        }
        
        // Если всё хорошо
        else {
            // Вывести успешное модальное окно
            setModalSuccessContent('Успешный вход в аккаунт!')
            setIsSuccessOpen(true)
        }
    }, [api, captchaValue, password, username])

    return (
        <>

            {/* Установка тегов для описания страницы и CEO */}

            <Helmet>
                <title>StormShop: Вход</title>
                <meta name="description" content="Страница входа в аккаунт на сайте магазина NitroStorm" />
                <meta name="keywords" content='логин вход Нитро Nitro Дискорд Discord НитроШоп Купить нитро регистрация' />
                <meta httpEquiv="Content-Language" content="ru" />
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
                <StormButton variant='outlined' onClick={() => navigate('/')} sx={{
                    marginTop: '16px',
                    background: 'none',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: 'none'
                    }
                }}>Вернутся на главную</StormButton>
            </ModalSuccess>

            {/* Основной контент */}
            <div className={styles.signup_container}>
                
                {/* Заголовок */}
                <div className={styles.signup_title}>Войди в свой профиль на Nitro Storm!</div>

                {/* Форма входа */}
                <div className={styles.signup_form}>

                    {/* Имя пользователя */}
                    <label htmlFor='username'>НИК:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} id='username' />

                    {/* Пароль */}
                    <label htmlFor='password'>ПАРОЛЬ: </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} id='password' />
                    
                    {/* Пометка */}
                    <span style={{ fontSize: '16px', width: '550px', textAlign: 'center' }}>Восстановить пароль напрямую нельзя, ведь к аккаунту нельзя прикрепить почту или номер телефона, поэтому обращайтесь к администрации напрямую в дискорде или ТГ! </span>

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
                    
                    {/* Кнопка для входа */}
                    <PinkButton sx={{pl: 8, pr: 8}} onClick={onLogin}>Войти</PinkButton>
                </div>
            </div>
        </>
    )
}