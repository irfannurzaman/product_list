// Modal.js
import React, { useState } from 'react';



const styles = {
    modalOverlay : {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        
    },

    modalContent : {
        background: '#fff',
        padding: 20,
        'border-radius': 8,
        position: 'relative',
        backgroundColor: 'rgba(34, 34, 34, 1)',
    },

    closeButton : {
        position: 'absolute',
        top: 10,
        right: 10,
        'font-size': 20,
        cursor: 'pointer',
        color: '#fff'
    }
}

const Modal = ({ showModal, closeModal, children }) => {
    return (
        <>
            {showModal && (
            <div style={styles.modalOverlay} onClick={closeModal}>
                <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <span style={styles.closeButton} onClick={closeModal}>
                        &times;
                    </span>
                    {children}
                </div>
            </div>
            )}
        </>
    );
};

export default Modal;
