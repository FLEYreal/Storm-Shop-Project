// Базовые Импорты
import React from "react";

// Стили
import resStyles from '../../../utils/resStyles';
import useResolutions from '../../../hooks/useResolusions';
import styles from './styles.module.scss'

function Title({ children }: { children: React.ReactNode }) {

    // Получить разрешение экрана
    const resolutions = useResolutions()

    return (
        <p className={`${styles.title} ${resStyles('title', resolutions)}`}>{children}</p>
    );
}

export default Title;