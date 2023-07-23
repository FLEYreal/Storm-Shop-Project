import React, { useState, useEffect, CSSProperties, ReactNode, FC } from 'react';
import styles from './Modal.module.css';
import x from '../img/x_black.svg'

interface CustomStyles {
    overlay?: CSSProperties;
    content?: CSSProperties;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    styles?: CustomStyles;
    className?: string;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, styles: customStyles = {}, className = '', children }) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLElement>) => {
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
            {isModalOpen && (
                <div
                    className={overlayClassName}
                    style={customStyles.overlay}
                    onClick={handleOverlayClick}
                >
                    <div className={contentClassName} style={customStyles.content}>
                        {children}
                        <button className={closeClassName} onClick={closeModal}>
                            <img src={x} alt='Close' width='28px' height='28px' />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;