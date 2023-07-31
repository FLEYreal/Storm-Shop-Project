// Стили
import styles from '../../../styles/App.module.scss'
import resStyles from '../../../utils/resStyles.js';
import useResolutions from '../../../hooks/useResolusions.js';


function Block_5() {

    // Получить объект с разрешением экрана
    const resolutions = useResolutions()

    return ( 
        // Главный тэг для блока 5
        <div className={`${styles.job} ${resStyles('job', resolutions)}`}>

        </div>
    );
}

export default Block_5;