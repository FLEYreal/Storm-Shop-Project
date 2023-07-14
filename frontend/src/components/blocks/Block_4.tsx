// Базовые импорты
import React, { useContext, useEffect, useState } from 'react'

// Стили
import styles from '../../styles/App.module.scss'
import resStyles from '../../utils/resStyles';
import useResolutions from '../../hooks/useResolusions';

// Компоненты & Хуки проекта
// ...

// API импорты
import { APIContext } from '../../context/APIContext'

function Block_4() {

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    // Класс для работы с API
    const api = useContext(APIContext)!.api

    return (
        <>
            <section className={`${styles.botOrder}`}>

                {/* Основной контент */}
                <div className={`${styles.botOrder_container}`}>
                    
                </div>

            </section>
        </>
    )
};

export default Block_4