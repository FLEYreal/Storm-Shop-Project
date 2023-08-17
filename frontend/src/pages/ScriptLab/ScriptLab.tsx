import { Box } from "@mui/material"

import GoodList from "../../components/GoodList/GoodList";

import styles from "./styles.module.scss"
import resStyles from "../../utils/resStyles";
import useResolutions from "../../hooks/useResolusions";
import { Link } from "react-router-dom";

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { StormButton } from "../../styles/mui";

function ScriptLab() {

    const resolutions = useResolutions()

    function handleSearch() {
        console.log('Search!')
    }

    return (
        <main className={`${styles.container} ${resStyles('container', resolutions)}`}>
            <Box component='article' className={`${styles.textBox}`}>
                <h1 className={`${styles.title} ${resStyles('title', resolutions)}`}>Лаборатория Скриптов</h1>
                <p className={`${styles.subtitle} ${resStyles('subtitle', resolutions)}`}>Не нашёл нужный скрипт? <Link to='/'>Закажи</Link></p>
            </Box>
            <label htmlFor="searchBox" style={{cursor: 'text'}}>
                <Box component='section' className={`${styles.searchBox}`}>
                    <form method="GET" onSubmit={handleSearch} className={`${styles.searchForm}`}>
                        <input id="searchBox" className={`${styles.searchInput} ${resStyles('smallSubtitle', resolutions)}`} placeholder="ИСКАТЬ" />
                        <StormButton startIcon={<SearchRoundedIcon className={`${styles.searchIcon}`} htmlColor="#000" />} className={`${styles.searchButton}`}></StormButton>
                    </form>
                </Box>
            </label>
            <GoodList type="script" />
        </main>
    );
}

export default ScriptLab;