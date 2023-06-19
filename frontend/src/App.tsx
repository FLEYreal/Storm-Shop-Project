import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '@mui/material/Button';

import styles from './App.module.scss';

import Block_1 from './components/blocks/Block_1';
import Block_2 from './components/blocks/Block_2';

import bubble1 from './components/img/bubbles.png';
import bubble4 from './components/img/bubbles4.png';
import wampus from './components/img/wampus.png';
import activeDeveloperBadge from './components/img/activeDeveloperBadge.svg';
import nitroBadge from './components/img/nitroBadge.svg';
import boostIcon from './components/img/boostIcon.png';
import botIcon from './components/img/botIcon.png';
import starIcon from './components/img/starIcon.png';
import tgIcon_small from './components/img/tgIcon_small.svg';
import tgIcon_big from './components/img/tgIcon_big.svg';
import discordIcon from './components/img/discordIcon.svg';
import profile_1 from './components/img/profile_1.png';
import profile_2 from './components/img/profile_2.png';
import profile_3 from './components/img/profile_3.png';
import './staticApp.css';

function App(): JSX.Element {

  /* Определить размер экрана, возвращает true/false */
  const isBigScreen = useMediaQuery({ minWidth: 1340 });
  const isMidScreen = useMediaQuery({ maxWidth: 1340 });
  const isSmallScreen = useMediaQuery({ maxWidth: 920 });
  const isPhone = useMediaQuery({ maxWidth: 640 });

  /* Функция, которая добавляется в className чтобы добавлять специальные стили в зависимости от размера экрана */
  function resStyles(name: string): string {
    switch (true) {
      case isPhone:
        return styles[`${name}_p`];
      case isSmallScreen:
        return styles[`${name}_s`];
      case isMidScreen:
        return styles[`${name}_m`];
      case isBigScreen:
        return styles[`${name}_b`];
      default:
        return '';
    }
  }

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

      particle.className = `${styles.badgeRain} ${resStyles('badgeRain')} ${getRandomBadgeClass()}`;
      particlesContainer!.appendChild(particle);

      setTimeout(() => {
        particlesContainer!.removeChild(particle);
      }, 10000);
    }, 250);

    return () => clearInterval(timer);
  }, []);

  /* Рандомайзер для КОМПОНЕНТОВ дождя из картинок под вампусом */
  const getRandomBadgeImage = () => {
    const images = [activeDeveloperBadge, nitroBadge, boostIcon, botIcon, starIcon, tgIcon_small];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  /* Рандомайзер для КЛАССОВ дождя из картинок под вампусом */
  const getRandomBadgeClass = () => {
    const classes = ['badgeRain1', 'badgeRain2', 'badgeRain3', 'badgeRain4', 'badgeRain5'];
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
  };

  return (
    <div className={`${styles.app}`}>

      {/* Все картинки, дизайн, у всех position: absolute; */}

      <div className={styles.absolute}>
        <img src={bubble1} className={styles.bubble1} alt="Bubble 1" />
        <img src={bubble4} className={`${styles.bubble4} ${resStyles('bubble4')}`} alt="Bubble 4" />
        <img src={wampus} className={`${styles.wampus} ${resStyles('wampus')}`} alt="Wampus" />
        <img src={tgIcon_big} className={`${styles.tgIcon_big} ${resStyles('tgIcon_big')}`} alt="TG Icon" />
        <img src={discordIcon} className={`${styles.discordIcon} ${resStyles('discordIcon')}`} alt="Discord Icon" />
        <img src={profile_1} className={`${styles.profile_1} ${resStyles('profile_1')}`} alt="Profile 1" />
        <img src={profile_2} className={`${styles.profile_2} ${resStyles('profile_2')}`} alt="Profile 2" />
        <img src={profile_3} className={`${styles.profile_3} ${resStyles('profile_3')}`} alt="Profile 3" />
        <img src={bubble4} className={`${styles.bubble4_1} ${resStyles('bubble4_1')}`} alt="Bubble 4.1" />
        <div id="particles-container" className={styles.particlesContainer}></div>
      </div>

      {/* Разные Блоки сайта */}

      <Block_1 />
      <Block_2 />
    </div>
  );
}

export default App;
