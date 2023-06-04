import React, { useState, useEffect, useRef } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';

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
  const [menuVisible, setMenuVisible] = useState(false);

  const menuTimeoutRef = useRef(null);
  const menuRef = useRef(null);

  const isBigScreen = useMediaQuery({minWidth: 1240})
  const isMidScreen = useMediaQuery({maxWidth: 1240})
  const isSmallScreen = useMediaQuery({maxWidth: 920})
  const isPhone = useMediaQuery({maxWidth: 640})
  const isSmallPhone = useMediaQuery({maxWidth: 320})


  console.log(menuVisible)
  useEffect(() => {
    const timer = setInterval(() => {
      const particlesContainer = document.getElementById('particles-container');
      const particle = document.createElement('img');
      particle.src = getRandomBadgeImage();

      if (window.innerWidth < 800) {
        particle.style.right = `4${Math.floor((Math.random() * 9) + 2)}%`;
      } else if (window.innerWidth < 1200) {
        particle.style.right = `3${Math.floor((Math.random() * 9) + 2)}%`;
      } else if (window.innerWidth < 1400) {
        particle.style.right = `2${Math.floor((Math.random() * 8) + 8)}%`;
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
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target;
      const isBurgerMenuButton = clickedElement.closest(`.${styles.burger_menu}`); // Проверяем, является ли родительский элемент кнопкой бургер-меню
  
      if (!isBurgerMenuButton && menuVisible) {
        hideMenu();
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuVisible]);

  const handleClickBurger = () => {
    clearTimeout(menuTimeoutRef.current);
    setMenuVisible(!menuVisible);
  };

  const handleMouseEnter = () => {
    clearTimeout(menuTimeoutRef.current);
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setMenuVisible(false);
    }, 3000); // Задержка в 3 секунды перед скрытием меню
  };

  const hideMenu = () => {setMenuVisible(false);};

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollTop === 0 && isScrolled) {
      setIsScrolled(false);
    }
  };

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
  

  return (
    <div className={`${styles.app}`}>
      <div
        ref={menuRef}
        style={{ display: menuVisible ? 'block' : 'none' }}
        className={styles.burger_menu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Button className={styles.burger_item}>Купить</Button>
        <Button className={styles.burger_item}>Заказать Бота</Button>
        <Button className={styles.burger_item}>Помощь</Button>
        <Button className={styles.burger_item}>Работа</Button>
      </div>
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
          <MediaQuery maxWidth={920}>
              <Button onClick={handleClickBurger} variant="contained" color="primary" size="small" className={styles.header_gold_menu}>
                ☰
              </Button>
          </MediaQuery>
          <MediaQuery minWidth={920}>
            <div className={styles.header_options_container}>
              <Button variant="contained" color="primary" size="small" className={styles.header_gold_buttons}>
                Купить
              </Button>
              <Button variant="contained" color="primary" size="small" className={styles.header_gold_buttons}>
                Заказать Бота
              </Button>
              <Button variant="contained" color="primary" size="small" className={styles.header_buttons}>
                Помощь
              </Button>
              <Button variant="contained" color="primary" size="small" className={styles.header_buttons}>
                Работа
              </Button>
            </div>
          </MediaQuery>
        </div>
      </div>
      <div 
        className={`
          ${styles.main_container} 
          ${isBigScreen ? 
            styles.main_container_b : isMidScreen ? 
            styles.main_container_m : isSmallScreen ?
            styles.main_container_s : isPhone ?
            styles.main_container_p : isSmallPhone ?
            styles.main_container_sp : ''
          }`}>
        <div className={styles.main_container_text}>
          <div className={`${styles.main_container_window} ${styles.container_window}`}>
            <div className={styles.main_title}>
              Storm Shop - это
            </div>
            <div className={styles.main_subtitle}>
              Магазин Дискорд Услуг!
            </div>
            <div className={styles.main_text}>
              <span style={{ color: '#f6ff71', textShadow: '#f6ff71 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>Nitro Full</span> за <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>99 рублей</span>, бейджик "<span style={{ color: '#53e645', textShadow: '#2bdb1b 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>Активный разработчик</span>" за <span style={{ color: '#ffd344', textShadow: '#ffd344 1px 0px 10px' }}>39 рублей</span> или свой собственный <span style={{ color: '#ffffff', textShadow: '#ffffff 1px 0px 10px', fontWeight: '500', cursor: 'pointer' }}>БОТ</span> для <span style={{ color: '#aebaff', textShadow: '#94a4ff 1px 0px 10px' }}>ДС</span> и <span style={{ color: '#7cebff', textShadow: '#7cebff 1px 0px 10px' }}>ТГ</span>, а также многое другое можно найти у нас в магазине по самым демократичным ценам!
            </div>
            <div className={styles.main_buttons}>
            <Button variant="contained" color="primary" size="small" className={styles.main_golden_buttons}>
              Купить!
            </Button>
            <Button variant="contained" color="primary" size="small" className={styles.main_buttons}>
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
