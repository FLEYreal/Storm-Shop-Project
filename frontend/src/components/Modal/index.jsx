import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

import x from '../img/x.svg'

const Modal = ({ isOpen, onClose, styles: customStyles = {}, className = '', children }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const overlayClassName = `${styles.overlay} ${className}`;
  const contentClassName = `${styles.content} ${className}`;
  const closeClassName = `${styles.close} ${className}`;

  return (
    <>
      {isOpen && (
        <div
          className={overlayClassName}
          style={customStyles.overlay}
          onClick={handleOverlayClick}
        >
          <div className={contentClassName} style={customStyles.content}>
            {children}
            <button className={closeClassName} onClick={closeModal}>
              <img src={x} alt='x' width='28px' height='28px'/>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
