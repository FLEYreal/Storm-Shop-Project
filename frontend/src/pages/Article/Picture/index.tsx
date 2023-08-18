import styles from './styles.module.scss'

function Picture({ route, alt }: { route: string, alt: string }) {
    return (
        <img className={styles.picture} src={`${import.meta.env.VITE_BACKEND_IP}:${import.meta.env.VITE_BACKEND_PORT}${route}`} alt={alt} />
    );
}

export default Picture;