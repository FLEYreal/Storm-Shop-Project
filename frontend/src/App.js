import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Button from '@mui/material/Button';

import bubble1 from './components/img/bubbles.png'
import bubble4 from './components/img/bubbles4.png'
import logo512 from './components/img/logo512.png'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const GoldenButtonColor = '#e29b00';
  const GoldenButtonHoverColor = '#ffb30f'
  const ButtonColor = '#7227ff';
  const ButtonHoverColor = '#8d4fff'

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollTop === 0 && isScrolled) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <div className={`${styles.app}`}>
      <div className={styles.absolute}>
        <img src={bubble1} className={styles.bubble1} alt="Bubble 1" />
        <img src={bubble4} className={styles.bubble4} alt="Bubble 4" />
      </div>
      <div className={`${styles.header} ${isScrolled ? styles.dark_header : ''}`}>
        <div className={styles.header_container}>
          <div className={styles.logo_container}>
            <a href='/' className={styles.logoLink}>
              <img src={logo512} className={`${styles.logo512} ${styles.logo}`} alt="Logo" />
            </a>Nitro Storm
          </div>
          <div className={styles.header_options_container}>
            <Button variant="contained" color="primary" size="small" sx={{
              backgroundColor: GoldenButtonColor,
              boxShadow: 'none',
              textShadow: 'none',
              '&:hover': {
                backgroundColor: GoldenButtonHoverColor,
              },
              margin: '7px',
              fontSize: '15px',
              fontWeight: 'bold',
              padding: '6px 20px'
            }}>
              Купить
            </Button>
            <Button variant="contained" color="primary" size="small" sx={{
              backgroundColor: ButtonColor,
              boxShadow: 'none',
              textShadow: 'none',
              '&:hover': {
                backgroundColor: ButtonHoverColor,
              },
              margin: '7px',
              fontSize: '15px',
              fontWeight: 'bold',
              padding: '6px 20px'
            }}>
              Помощь
            </Button>
            <Button variant="contained" color="primary" size="small" sx={{
              backgroundColor: ButtonColor,
              boxShadow: 'none',
              textShadow: 'none',
              '&:hover': {
                backgroundColor: ButtonHoverColor,
              },
              margin: '7px',
              fontSize: '15px',
              fontWeight: 'bold',
              padding: '6px 20px'
            }}>
              Работа
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.main_container}>
        <div className={styles.main_container_text}>
          <div className={`${styles.main_container_window} ${styles.container_window}`}>
            <div className={styles.main_title}>
              Nitro Storm - это
            </div>
            <div className={styles.main_subtitle}>
              Лучшее место для покупки Нитро!
            </div>
            <div className={styles.main_text}>
              <span style={{ color: '#ffb4ec', textShadow: '#ffb4ec 1px 0 10px' }}>Эмодзи</span>, <span style={{ color: '#fdff7b', textShadow: '#fdff7b 1px 0 10px' }}>стикеры</span>, <span style={{ color: '#aeff6c', textShadow: '#aeff6c 1px 0 10px' }}>активности</span>, <span style={{ color: '#abe5ff', textShadow: '#abe5ff 1px 0 10px' }}>HD видео</span> и тонна других возможностей, которые даёт вам <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>Nitro Full</span> всего за <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>169 рублей!</span>
            </div>
          </div>
        </div>
        <div className={styles.main_container_images}></div>
      </div>
    </div>
  );
}

export default App;
