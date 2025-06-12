import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      // Focus the modal for accessibility
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1} // Make content focusable
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 