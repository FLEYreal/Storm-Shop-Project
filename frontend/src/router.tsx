// Базовые импорты
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Страницы
import App from './pages/App/App.tsx';
import SignUp from './pages/SignUp.tsx'
import LogIn from './pages/LogIn.tsx';
import ScriptLab from './pages/ScriptLab/ScriptLab.tsx';
import Article from './pages/Article/Article.tsx';

// API импорты
import Api from './utils/Api.ts'
import { APIContext } from './context/APIContext.ts'
import { getUUID, checkUUID, findUUID } from './utils/UUID.ts';

// Компоненты & Хуки проекта
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';

function RouterComp() {

    // Получить UUID для пользователя и сохранить его в локальное хранилище браузера    
    useEffect((): void => {
        const isUUID = checkUUID();
        if (!isUUID) getUUID()
    }, [])

    return (
        <main>
            <APIContext.Provider value={{ api: new Api(findUUID() === '' ? getUUID() : findUUID()) }}>

                {/* Роуты */}
                <BrowserRouter>

                    {/* Хедер сайта */}
                    <Header />

                    <Routes>

                        {/* Главная страница, если роут не найден, также загружать главную страницу */}
                        <Route path="/" element={<App />} />
                        <Route path="/*" element={<App />} />

                        {/* Логин / Регистрация */}
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<LogIn />} />

                        {/* Варианты роутера */}
                        <Route path="/scripts" element={<ScriptLab />} />
                        <Route path="/script" element={<ScriptLab />} />
                        <Route path="/script-lab" element={<ScriptLab />} />

                        {/* Статьи */}
                        <Route path='/article/:name' element={<Article />} />

                    </Routes>

                    {/* Футер сайта */}
                    <Footer />

                </BrowserRouter>

            </APIContext.Provider>
        </main>
    )
}

export default RouterComp;