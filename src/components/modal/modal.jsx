import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

const Modal = (props) => {
  const { children, onClose } = props;
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='modal__container'>
        <button type='button' onClick={onClose} className='modal__close-button'>X</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal'),
  );
};
export default Modal;
