import React from 'react';
import ModalLayout from './components/ModalFadeLayout';
import useModal from '../../lib/UseModal';

const Modal = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div>
      <button onClick={openModal}>Modal Open Fade</button>
      <ModalLayout isOpen={isOpen} closeModal={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>        
      </ModalLayout>
    </div>
  );
};

export default Modal;