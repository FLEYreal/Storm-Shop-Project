import React, { useCallback, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles/App.module.scss'
import SimpleButton from './components/SimpleButton'
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from 'react-helmet';

import ModalFail from './components/ModalFail/index.jsx'
import ModalSuccess from './components/ModalSuccess/index.jsx'

import { APIContext } from './context/APIContext'

function LogIn() {
    const api = useContext(APIContext)!.api

    const navigate = useNavigate();
    const captchaSiteKey: string = '6LeKRR4nAAAAAFsP7Qr_dCWczScuENUI1P7d4pf6';

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState('')

    const [isSuccessOpen, setIsSuccessOpen] = useState(false)
    const [modalSuccessContent, setModalSuccessContent] = useState('')

    const [captchaValue, setCaptchaValue] = useState("");

    function onClose() {
        setIsOpen(false)
        setIsSuccessOpen(false)
    }

    const onLogin = useCallback(async () => {
        // Validate captcha
        if (!captchaValue) {
            setModalContent("Пожалуйста, пройдите капчу");
            setIsOpen(true);
            return;
        }

        const resultRaw = await api!.login({
            username: username,
            password: password,
            recaptchaToken: captchaValue
        })
        const result = resultRaw.data

        console.log(result)
        if (result.success === false || result.succeed === false) {
            setModalContent(result.error);
            setIsOpen(true);
        } else {
            setModalSuccessContent('Успешный вход в аккаунт!')
            setIsSuccessOpen(true)
        }
    }, [api, captchaValue, password, username])

    return (
        <>
            <Helmet>
                <title>StormShop: Вход</title>
                <meta name="description" content="Страница входа в аккаунт на сайте магазина NitroStorm" />
                <meta name="keywords" content='логин вход Нитро Nitro Дискорд Discord НитроШоп Купить нитро регистрация' />
                <meta http-equiv="Content-Language" content="ru" />
                <meta name="author" content="FLEY" />
            </Helmet>
            .
            <ModalFail isOpen={isOpen} onClose={onClose}>
                {modalContent}
            </ModalFail>

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

            <div className={styles.signup_container}>
                <div className={styles.signup_title}>Войди в свой профиль на Nitro Storm!</div>
                <div className={styles.signup_form}>
                    <label htmlFor='username'>НИК:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} id='username' />
                    <label htmlFor='password'>ПАРОЛЬ: </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} id='password' />
                    <span style={{ fontSize: '16px', width: '550px', textAlign: 'center' }}>Восстановить пароль напрямую нельзя, ведь к аккаунту нельзя прикрепить почту или номер телефона, поэтому обращайтесь к администрации напрямую в дискорде или ТГ! </span>
                    <div className={styles.signup_form}>
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
                    <SimpleButton onClick={onLogin}>Войти</SimpleButton>
                </div>
            </div>
        </>
    )
};

export default LogIn