import React, { useCallback, useState, useContext, useEffect } from 'react'
import styles from './styles/App.module.scss'
import SimpleButton from './components/SimpleButton'
import ReCAPTCHA from 'react-google-recaptcha'

import Modal from './components/Modal/index.tsx'

import { APIContext } from './context/APIContext'

function LogIn() {
    const api = useContext(APIContext)!.api

    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState('')

    const captchaSiteKey: string = '6LeKRR4nAAAAAFsP7Qr_dCWczScuENUI1P7d4pf6';
    const [captchaValue, setCaptchaValue] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

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
    }, [])

    return (
        <>
            .
            <div className={styles.signup_container}>
                <div className={styles.signup_title}>Войди в свой профиль на Nitro Storm!</div>
                <div className={styles.signup_form}>
                    <label htmlFor='username'>НИК:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} id='username' />
                    <label htmlFor='password'>ПАРОЛЬ: </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} id='password' />
                    <span style={{ fontSize: '16px', width: '550px', textAlign: 'center' }}>Восстановить пароль напрямую нельзя, ведь к аккаунту нельзя прикрепить почту или номер телефона, поэтому обращайтесь в администрации напрямую в дискорде или ТГ! </span>
                    <div>
                        <ReCAPTCHA
                            onChange={(value: string | null) => {
                                if (value) {
                                    setCaptchaValue(value);
                                }
                            }}
                            sitekey={captchaSiteKey}
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