import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../modal/modal';
import './modalVideo.scss';

const ModalVideo = (props) => {
  const { isOpen, onClose, videoUrl } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <iframe
        title='video'
        width='660'
        height='415'
        src={`${videoUrl}?controls=0&autoplay=1&rel=0&showinfo=0&modestbranding=0&color=white`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </Modal>

  );
};
export default ModalVideo;
