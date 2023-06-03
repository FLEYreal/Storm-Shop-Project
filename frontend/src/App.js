import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Button from '@mui/material/Button';

import bubble1 from './components/img/bubbles.png'
import bubble4 from './components/img/bubbles4.png'
import logo512 from './components/img/logo512.png'
import wampus from './components/img/wampus.png'
import activeDeveloperBadge from './components/img/activeDeveloperBadge.svg'
import nitroBadge from './components/img/nitroBadge.svg'
import boostIcon from './components/img/boostIcon.png'
import botIcon from './components/img/botIcon.png'
import starIcon from './components/img/starIcon.png'
import tgIcon_small from './components/img/tgIcon_small.svg'
import tgIcon_big from './components/img/tgIcon_big.svg'
import discordIcon from './components/img/discordIcon.svg'
import profile_1 from './components/img/profile_1.png'
import profile_2 from './components/img/profile_2.png'
import profile_3 from './components/img/profile_3.png'
import './staticApp.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const GoldenButtonColor = '#e29b00';
  const GoldenButtonHoverColor = '#ffb30f';
  const ButtonColor = '#7227ff';
  const ButtonHoverColor = '#8d4fff';

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

  const getRandomBadgeImage = () => {
    const images = [activeDeveloperBadge, nitroBadge, boostIcon, botIcon, starIcon, tgIcon_small];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const getRandomBadgeClass = () => {
    const classes = ['badgeRain1', 'badgeRain2', 'badgeRain3', 'badgeRain4', 'badgeRain5'];
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const particlesContainer = document.getElementById('particles-container');
      const particle = document.createElement('img');
      particle.src = getRandomBadgeImage();

      if (window.innerWidth < 1200) {
        particle.style.right = `3${Math.floor((Math.random() * 9) + 5)}%`;
      } else if (window.innerWidth < 1690) {
        particle.style.right = `3${Math.floor((Math.random() * 8))}%`;
      } else if (window.innerWidth < 1465) {
        particle.style.right = `2${Math.floor((Math.random() * 7))}%`;
      } else {
        particle.style.right = `2${Math.floor((Math.random() * 7))}%`;
      }
  
      particle.className = `${styles.badgeRain} ${getRandomBadgeClass()}`;
      particlesContainer.appendChild(particle);
  
      setTimeout(() => {
        particlesContainer.removeChild(particle);
      }, 10000);
    }, 250);
  
    return () => clearInterval(timer);
  }, []);
  

  return (
    <div className={`${styles.app}`}>
      <div className={styles.absolute}>
        <img src={bubble1} className={styles.bubble1} alt="Bubble 1" />
        <img src={bubble4} className={styles.bubble4} alt="Bubble 4" />
        <img src={wampus} className={styles.wampus} alt="Wampus" />
        <img src={tgIcon_big} className={styles.tgIcon_big} alt="TG Icon" />
        <img src={discordIcon} className={styles.discordIcon} alt="Discord Icon" />
        <img src={profile_1} className={styles.profile_1} alt="Profile 1" />
        <img src={profile_2} className={styles.profile_2} alt="Profile 2" />
        <img src={profile_3} className={styles.profile_3} alt="Profile 3" />
        <img src={bubble4} className={styles.bubble4_1} alt="Bubble 4.1" />
        <div id="particles-container" className={styles.particlesContainer}></div>
      </div>
      <div className={`${styles.header} ${isScrolled ? styles.dark_header : ''}`}>
        <div className={styles.header_container}>
          <div className={styles.logo_container}>
            <a href='/' className={styles.logoLink}>
              <img src={logo512} className={`${styles.logo512} ${styles.logo}`} alt="Logo" />
            </a>Storm Shop
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
              Заказать Бота
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
              padding: '6px 20px',
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
              Storm Shop - это
            </div>
            <div className={styles.main_subtitle}>
              Магазин Дискорд Услуг!
            </div>
            <div className={styles.main_text}>
              {/* <span style={{ color: '#fdff7b', textShadow: '#fdff7b 1px 0 10px' }}>Эмодзи</span>, <span style={{ color: '#aeff6c', textShadow: '#aeff6c 1px 0 10px' }}>активности</span>, <span style={{ color: '#abe5ff', textShadow: '#abe5ff 1px 0 10px' }}>HD видео</span> и тонна других возможностей, которые даёт вам <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>Nitro Full</span> всего за <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>169 рублей!</span> */}
              <span style={{ color: '#f6ff71', textShadow: '#f6ff71 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>Nitro Full</span> за <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>99 рублей</span>, бейджик "<span style={{ color: '#53e645', textShadow: '#2bdb1b 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>Активный разработчик</span>" за <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>39 рублей</span> или свой собственный <span style={{ color: '#ffffff', textShadow: '#ffffff 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>БОТ</span> для <span style={{ color: '#aebaff', textShadow: '#94a4ff 1px 0px 10px' }}>ДС</span> и <span style={{ color: '#7cebff', textShadow: '#7cebff 1px 0px 10px' }}>ТГ</span>, а также многое другое можно найти у нас в магазине по самым демократичным ценам!
            </div>
            <div className={styles.main_buttons}>
            <Button variant="contained" color="primary" size="small" sx={{
              backgroundColor: GoldenButtonColor,
              boxShadow: 'none',
              textShadow: 'none',
              '&:hover': {
                backgroundColor: GoldenButtonHoverColor,
                boxShadow: 'inset 2px 2px 3px 0px rgba(255, 255, 255, 0.3), inset -2px -2px 3px 0px rgba(0, 0, 0, 0.3)'
              },
              margin: '7px',
              fontSize: '22px',
              fontWeight: 'bold',
              padding: '10px 40px',
              borderRadius: '17px',
              boxShadow: 'inset 2px 2px 3px 0px rgba(255, 255, 255, 0.25), inset -2px -2px 3px 0px rgba(0, 0, 0, 0.25)'
            }}>
              Купить!
            </Button>
            <Button variant="contained" color="primary" size="small" sx={{
              backgroundColor: ButtonColor,
              boxShadow: 'none',
              textShadow: 'none',
              '&:hover': {
                backgroundColor: ButtonHoverColor,
                boxShadow: 'inset 2px 2px 3px 0px rgba(255, 255, 255, 0.3), inset -2px -2px 3px 0px rgba(0, 0, 0, 0.3)'
              },
              margin: '7px',
              fontSize: '22px',
              fontWeight: 'bold',
              padding: '10px 40px',
              borderRadius: '17px',
              boxShadow: 'inset 2px 2px 3px 0px rgba(255, 255, 255, 0.25), inset -2px -2px 3px 0px rgba(0, 0, 0, 0.25)'
            }}>
              ОТЗЫВЫ
            </Button>
            </div>
          </div>
        </div>
        <div className={styles.main_container_images}></div>
      </div>
    </div>
  );
}

export default App;
