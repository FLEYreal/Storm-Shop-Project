// Базовые Импорты
import React from "react";

// Стили
import resStyles from '../../../utils/resStyles';
import useResolutions from '../../../hooks/useResolusions';
import styles from './styles.module.scss'

function SmallTitle({ children }: { children: React.ReactNode }) {

    // Получить разрешение экрана
    const resolutions = useResolutions()

    return (
        <p className={`${styles.small_title} ${resStyles('smallTitle', resolutions)}`}>{children}</p>
    );
}

export default SmallTitle;