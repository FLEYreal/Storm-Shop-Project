import React from 'react'
import styles from '../../App.module.scss'
import { useMediaQuery } from 'react-responsive';

function Block_2() {
    
    const isBigScreen = useMediaQuery({minWidth: 1340})
    const isMidScreen = useMediaQuery({maxWidth: 1340})
    const isSmallScreen = useMediaQuery({maxWidth: 920})
    const isPhone = useMediaQuery({maxWidth: 640})
  
    function resStyles(name:string) {
      switch (true) {
        case isPhone: return styles[name + '_p'];
        case isSmallScreen: return styles[name + '_s'];
        case isMidScreen: return styles[name + '_m'];
        case isBigScreen: return styles[name + '_b'];
        default: return '';
      }
    }  

    return (
        <>
        
        </>
    )
};
 
export default Block_2