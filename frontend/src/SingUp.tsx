import React from 'react'
import styles from './App.module.scss'
import SimpleButton from './components/SimpleButton'

function SignUp() {
    return (
        <>
            .
            <div className={styles.signup_container}>
                <div className={styles.signup_title}>Зарегестрируйся на Nitro Storm!</div>
                <div className={styles.signup_subtitle}><b>Зачем?</b> - Мы сможем подсчитать вашу статистику, отследить покупки и платить вам прибыль!</div>
                <div className={styles.signup_form}>
                    <label htmlFor='username'>НИК:</label>
                    <input id='username'/>
                    <span style={{fontSize: '16px'}}>Разрешено использовать только латиницу [a-z,A-Z], цифры и "_" </span>
                    <label htmlFor='password'>ПАРОЛЬ: </label>
                    <input id='password'/>
                    <span style={{fontSize: '16px'}}>Пароль должен быть не меньше 16 символов и не больше 32! </span>
                    <span style={{fontSize: '16px', color: 'red'}}>Восстановить пароль нельзя! Сохрани его себе куда-нибудь!</span>
                    <br></br>
                    <SimpleButton>Зарегестрироваться</SimpleButton>
                </div>
            </div>
        </>
    )
};
 
export default SignUp