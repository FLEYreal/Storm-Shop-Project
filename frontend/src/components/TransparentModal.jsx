import React from 'react'
import styles from './TransparentModal.module.css'

function TransparentModal({children, classNames, ...props}) {
    return (
        <div className={`${styles.container_window} ${classNames}`}>
            {children}
        </div>
    )
};
 
export default TransparentModal