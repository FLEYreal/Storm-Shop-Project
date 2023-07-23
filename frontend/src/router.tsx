// Базовые импорты
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Страницы
import App from './App.tsx';
import SignUp from './SignUp.tsx'
import LogIn from './LogIn.tsx';

// API импорты
import Api from './utils/Api.ts'
import { APIContext } from './context/APIContext.ts'
import { getUUID, checkUUID, findUUID } from './utils/UUID.ts';

// Компоненты & Хуки проекта
import Header from './components/Header';

function RouterComp() {

    // Получить UUID для пользователя и сохранить его в локальное хранилище браузера    
    useEffect((): void => {
        const isUUID = checkUUID();
        if (!isUUID) getUUID()
    }, [])


    // ФУНКЦИИ ДЛЯ МОБИЛЬНОГО МЕНЮ:


    return (
        <main>
            <APIContext.Provider value={{ api: new Api(findUUID() === '' ? getUUID() : findUUID()) }}>
                {/* Хедер сайта */}

                <Header/>

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