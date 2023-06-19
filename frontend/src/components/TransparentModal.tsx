import React from 'react';
import styles from './TransparentModal.module.css';

interface TransparentModalProps {
  children?: React.ReactNode;
  classNames: string;
}

function TransparentModal({ children = '', classNames, ...props }: TransparentModalProps) {
  return (
    <div className={`${styles.container_window} ${classNames}`}>
      {children}
    </div>
  );
}

export default TransparentModal;
