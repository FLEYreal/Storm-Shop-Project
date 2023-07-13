import React, { useEffect, useContext, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles/App.module.scss'
import SimpleButton from './components/SimpleButton'
import { APIContext } from './context/APIContext'
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from 'react-helmet';

import ModalFail from './components/ModalFail/index.jsx'
import ModalSuccess from './components/ModalSuccess/index.jsx'

function SignUp() {
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

    const onSignUp = useCallback(async () => {
        // Validate captcha
        console.log(captchaValue)
        if (!captchaValue) {
            setModalContent("Пожалуйста, пройдите капчу");
            setIsOpen(true);
            return;
        }

        let resultRaw = await api!.signUp({
            username: username,
            password: password,
            recaptchaToken: captchaValue
        });
        let result = resultRaw.data;

        if (result.success === false || result.succeed === false) {
            setModalContent(result.error);
            setIsOpen(true);
        } else {
            setModalSuccessContent('Успешная регистрация!')
            setIsSuccessOpen(true)
        }
    }, [api, captchaValue, password, username]);

    return (
        <>
            <Helmet>
                <title>StormShop: Регистрация</title>
                <meta name="description" content="Страница регистрации на сайте магазина NitroStorm" />
                <meta name="keywords" content='регистрация Нитро Nitro Дискорд Discord НитроШоп Купить нитро логин' />
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
                <div className={styles.signup_title}>Зарегестрируйся на Nitro Storm!</div>
                <div className={styles.signup_subtitle}><b>Зачем?</b> - Мы сможем подсчитать вашу статистику, отследить покупки и платить вам прибыль!</div>
                <div className={styles.signup_form}>
                    <label htmlFor='username'>НИК:</label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} id='username' />
                    <span style={{ fontSize: '16px' }}>Разрешено использовать только латиницу [a-z,A-Z], цифры и "_" </span>
                    <label htmlFor='password'>ПАРОЛЬ: </label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} id='password' />
                    <span style={{ fontSize: '16px' }}>Пароль должен быть не меньше 16 символов и не больше 32! </span>
                    <span style={{ fontSize: '16px', color: 'red' }}>Восстановить пароль нельзя! Сохрани его себе куда-нибудь!</span>
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
                    <SimpleButton onClick={onSignUp}>Зарегестрироваться</SimpleButton>
                </div>
            </div>
        </>
    )
};

export default SignUp