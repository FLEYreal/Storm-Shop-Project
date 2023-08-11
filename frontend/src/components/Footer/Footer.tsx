// Стили
import useResolutions from '../../hooks/useResolusions';
import resStyles from '../../utils/resStyles';
import styles from './styles.module.scss'

function Footer() {

    const resolution = useResolutions();

    return ( 
        <footer className={`${styles.footer}`}>
            <div className={`${resStyles('container', resolution)}`}>
                
            </div>
        </footer>
    );
}

export default Footer;