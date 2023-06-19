import React from 'react'
import styles from './App.module.scss'
import SimpleButton from './components/SimpleButton'

function LogIn() {
    return (
        <>
            .
            <div className={styles.signup_container}>
                <div className={styles.signup_title}>Войди в свой профиль на Nitro Storm!</div>
                <div className={styles.signup_form}>
                    <label htmlFor='username'>НИК:</label>
                    <input id='username'/>
                    <label htmlFor='password'>ПАРОЛЬ: </label>
                    <input id='password'/>
                    <span style={{fontSize: '16px', width: '550px', textAlign: 'center'}}>Восстановить пароль напрямую нельзя, ведь к аккаунту нельзя прикрепить почту или номер телефона, поэтому обращайтесь в администрации напрямую в дискорде или ТГ! </span>
                    <br></br>
                    <SimpleButton>Войти</SimpleButton>
                </div>
            </div>
        </>
    )
};
 
export default LogIn