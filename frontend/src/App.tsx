import React, { useState, useEffect, useRef, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet';

import styles from './styles/App.module.scss';

import Block_1 from './components/blocks/Block_1';
import Block_2 from './components/blocks/Block_2';
import Block_3 from './components/blocks/Block_3'

import resStyles from './utils/resStyles.ts';
import useResolutions from './hooks/useResolusions.ts';

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
import light from './components/img/light.svg'
import './staticApp.css';

import {APIContext} from './context/APIContext.ts'

function App(): JSX.Element {
    /* Определить размер экрана, возвращает true/false */
    const resolutions = useResolutions()
    const { isBigScreen, isMidScreen, isSmallScreen, isPhone } = useResolutions()

    useEffect(() => {
        if (!isPhone) {
            const timer = setInterval(() => {
                const particlesContainer = document.getElementById('particles-container');
                const particle = document.createElement('img');
                particle.src = getRandomBadgeImage();

                if (isSmallScreen) {
                    particle.style.right = `calc(3${Math.floor((Math.random() * 8))}${Math.floor((Math.random() * 5))}px + 40px)`;
                    particle.style.top = `600px`;
                } else if (isMidScreen) {
                    particle.style.right = `1${Math.floor((Math.random() * 8))}${Math.floor((Math.random() * 5))}px`;
                } else if (isBigScreen) {
                    particle.style.right = `1${Math.floor((Math.random() * 6))}${Math.floor((Math.random() * 9))}px`;
                }

                particle.className = `${styles.badgeRain} ${resStyles('badgeRain', resolutions)} ${getRandomBadgeClass()}`;
                particlesContainer!.appendChild(particle);

                setTimeout(() => {
                    particlesContainer!.removeChild(particle);
                }, 10000);
            }, 250);

            return () => clearInterval(timer);
        }
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
            <Helmet>
                <title>StormShop: Магазин Нитро и не только!</title>
                <meta name="description" content="StormShop: Магазин дискорд услуг, а именно Нитро, Бейджики, Создание ботов и даже сайтов!" />
                <meta name="keywords" content='Нитро Nitro Дискорд Discord НитроШоп Купить нитро'/>
                <meta http-equiv="Content-Language" content="ru" />
                <meta name="author" content="FLEY"/>
            </Helmet>


            {/* Все картинки, дизайн, у всех position: absolute; */}

            <div className={`${styles.absolute_content} ${resStyles('absolute_content', resolutions)}`}>
                <img src={bubble4} className={`${styles.bubble4} ${resStyles('bubble4', resolutions)}`} alt="Bubble 4" />
                <img src={wampus} className={`${styles.wampus} ${resStyles('wampus', resolutions)}`} alt="Wampus" />
                <img src={tgIcon_big} className={`${styles.tgIcon_big} ${resStyles('tgIcon_big', resolutions)}`} alt="TG Icon" />
                <img src={discordIcon} className={`${styles.discordIcon} ${resStyles('discordIcon', resolutions)}`} alt="Discord Icon" />
                <img src={bubble4} className={`${styles.bubble4_1} ${resStyles('bubble4_1', resolutions)}`} alt="Bubble 4.1" />
                <div id="particles-container" className={styles.particlesContainer}></div>
            </div>
            <div className={`${styles.purple_light} ${resStyles('purple_light', resolutions)}`}></div>
            <div className={`${styles.blue_light} ${resStyles('blue_light', resolutions)}`}></div>
            <img src={bubble1} className={`${styles.bubble1} ${resStyles('bubble1', resolutions)}`} alt="Bubble 1" />

            {/* Разные Блоки сайта */}

            <Block_1 />
            <Block_2 />
            <Block_3 />
        </div>
    );
}

export default App;
