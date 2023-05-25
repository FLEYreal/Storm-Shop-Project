import styles from './App.module.scss';

import bubble1 from './components/img/bubbles.png'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.absolute}>
        <img src={bubble1} className={styles.bubble1}/>
      </div>
      <div className={styles.header}>
      
      </div>
      <div className={styles.main_container}>
          <div className={styles.main_container_text}>
              <div className={styles.main_container_window}>
                <div className={styles.main_title}>
                  Nitro Storm - это
                </div>
                <div className={styles.main_subtitle}>
                  Лучшее место для покупки Нитро!
                </div>
                <div className={styles.main_text}>
                  Эмодзи, стикеры, активности, HD видео и тонна других возможностей, которые даёт вам Nitro Full всего за 169 рублей!
                </div>
              </div>
          </div>
          <div className={styles.main_container_images}></div>
      </div>
    </div>
  );
}

export default App;
