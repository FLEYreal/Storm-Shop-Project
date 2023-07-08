import React from 'react'
import resStyles from '../utils/resStyles'
import styles from '../styles/App.module.scss'

interface Description {
     title:string,
     subtitle:string
     cost:string | number,
     image:string,
}

function Good({desc}:{desc:Description}) {
     const { title, subtitle, cost, image } = desc;
     return (
          <div className={styles.goodItem}>
               <div className={styles.image}></div>
               <div>
                    <div>NITRO FULL: 1 МЕСЯЦ</div>
                    <div>NITRO FULL: 1 МЕСЯЦ</div>
               </div>
          </div>
     )
};

export default Good 