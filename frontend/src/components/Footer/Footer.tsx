// Стили
import useResolutions from '../../hooks/useResolusions';
import resStyles from '../../utils/resStyles';
import styles from './styles.module.scss'

// Картинки
import logo from '../img/logo512.png'

function Footer() {

    const resolution = useResolutions();
    const { isSmallScreen, isPhone } = useResolutions();

    return (
        <footer className={`${styles.footer}`}>
            <div className={`${resStyles('container', resolution)}`}>
                <div className={`${styles.top}`}>
                    {!isPhone ?
                        <div className={`${styles.column} ${styles.logo_column}`}>
                            <img src={logo} alt='StormShop Logo' className={`${resStyles('footer_logo', resolution)}`} />
                        </div>
                        : <></>
                    }
                    <div className={`${styles.column}`}>
                        <div className={`${styles.title} ${resStyles('smallTitle', resolution)}`}>Заголовок</div>
                        <div className={`${styles.subtitle} ${resStyles('smallSubtitle', resolution)}`}><a href='/' style={{color: 'inherit'}}>Пункт</a></div>
                        <div className={`${styles.subtitle} ${resStyles('smallSubtitle', resolution)}`}><a href='/' style={{color: 'inherit'}}>Пункт</a></div>
                        <div className={`${styles.subtitle} ${resStyles('smallSubtitle', resolution)}`}><a href='/' style={{color: 'inherit'}}>Пункт</a></div>
                    </div>
                    <div className={`${styles.column}`}>
                        <div className={`${styles.title} ${resStyles('smallTitle', resolution)}`}>Заголовок</div>
                        <div className={`${styles.subtitle} ${resStyles('smallSubtitle', resolution)}`}><a href='/' style={{color: 'inherit'}}>Пункт</a></div>
                        <div className={`${styles.subtitle} ${resStyles('smallSubtitle', resolution)}`}><a href='/' style={{color: 'inherit'}}>Пункт</a></div>
                        <div className={`${styles.subtitle} ${resStyles('smallSubtitle', resolution)}`}><a href='/' style={{color: 'inherit'}}>Пункт</a></div>
                    </div>
                    {isSmallScreen && isPhone ? <></> :
                        <div className={`${styles.column}`}>
                            <div className={`${styles.title} ${resStyles('smallTitle', resolution)}`}>Заголовок</div>
                            <div className={`${styles.subtitle} ${resStyles('smallSubtitle', resolution)}`}><a href='/' style={{color: 'inherit'}}>Пункт</a></div>
                            <div className={`${styles.subtitle} ${resStyles('smallSubtitle', resolution)}`}><a href='/' style={{color: 'inherit'}}>Пункт</a></div>
                            <div className={`${styles.subtitle} ${resStyles('smallSubtitle', resolution)}`}><a href='/' style={{color: 'inherit'}}>Пункт</a></div>
                        </div>
                    }
                </div>
                <div className={`${styles.bottom}`}>
                    © {new Date().getFullYear()} StormShop
                </div>
            </div>
        </footer>
    );
}

export default Footer;