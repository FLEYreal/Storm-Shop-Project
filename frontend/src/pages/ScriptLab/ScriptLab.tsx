// Базовые Импорты
import { useState } from 'react'
import { Link } from "react-router-dom";

// Стили
import styles from "./styles.module.scss"
import resStyles from "../../utils/resStyles";
import useResolutions from "../../hooks/useResolusions";

// Material-UI
import { Box } from "@mui/material"
import { StormButton } from "../../styles/mui";

// Компоненты
import GoodList from "../../components/GoodList/GoodList";

// Иконки
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function ScriptLab() {

    // Значение инпута поиска
    const [ query, setQuery ] = useState('')

    // Получить разрешение экрана
    const resolutions = useResolutions()

    return (
        // Главный контейнер
        <main className={`${styles.container} ${resStyles('container', resolutions)}`}>

            {/* Заголовок страницы */}
            <Box component='article' className={`${styles.textBox}`}>
                <h1 className={`${styles.title} ${resStyles('title', resolutions)}`}>Лаборатория Скриптов</h1>
                <p className={`${styles.subtitle} ${resStyles('subtitle', resolutions)}`}>Не нашёл нужный скрипт? <Link to='/'>Закажи</Link></p>
            </Box>
            
            {/* Инпут для поиска товара */}
            <label htmlFor="searchBox" style={{cursor: 'text'}}>
                <Box component='section' className={`${styles.searchBox}`}>
                    <form method="GET" className={`${styles.searchForm}`} onSubmit={(e) => e.preventDefault()}>
                        <input value={query} onChange={(e) => setQuery(e.target.value)} id="searchBox" className={`${styles.searchInput} ${resStyles('smallSubtitle', resolutions)}`} placeholder="ИСКАТЬ" />
                        <StormButton startIcon={<SearchRoundedIcon className={`${styles.searchIcon}`} htmlColor="#000" />} className={`${styles.searchButton}`}></StormButton>
                    </form>
                </Box>
            </label>

            {/* Список товаров */}
            <GoodList type="script" q={query} />
        </main>
    );
}

export default ScriptLab;