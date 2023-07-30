// Базовые импорты
import { useContext, useEffect, useState } from 'react'
import { AxiosResponse } from 'axios';

// API импорты
import { APIContext } from '../../../../context/APIContext.js'

// Стили
import styles from '../../../../styles/App.module.scss'
import resStyles from '../../../../utils/resStyles.js';
import useResolutions from '../../../../hooks/useResolusions.js';

import ScriptGood from '../../../ScriptGood.js';

function ScriptListExample() {
    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    // Список скриптов
    const [scripts, setScripts] = useState<AxiosResponse["data"][]>([])

    // Класс для работы с API 
    const api = useContext(APIContext)!.api

    // Получить список из 2 рандомных скриптов
    useEffect(() => {
        (async () => {

            // Получить список скриптов с бекенда
            const res = await api?.getScriptList() as { data: AxiosResponse["data"] }

            // Загрузить в массив scripts 2 рандомных скрипта
            setScripts([
                res!.data[Math.floor(Math.random() * res!.data.length)],
                res!.data[Math.floor(Math.random() * res!.data.length)],
            ])
        })()
    }, []);


    return (
        <div className={`${styles.botOrder_scriptsBlock}`}>
            <span className={`${styles.botOrder_scriptsBlock_subtitle}`}>P.S. Эти скрипты случайно выбраны из магазина</span>
            {
                scripts.map((i) =>
                    <ScriptGood key={i.id} desc={{
                        title: i.displayName,
                        cost: i.cost,
                        theme: i.themeColor,
                        themeTransparent: i.themeTransparent,
                        desc: i.desc
                    }} />
                )
            }
        </div>
    );
}

export default ScriptListExample;