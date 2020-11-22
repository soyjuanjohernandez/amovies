import React, { useState } from 'react';
import Banner from '../banner/Banner';
import ModalVideo from '../modalVideo/ModalVideo';
import './slider.scss';

const Slider = (props) => {

  const { dataMovies } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const bannerMovies = dataMovies.filter(item => item.isBanner === true);
  const moveBanner = (value) => {
    document.querySelector('.slider_container').style.marginLeft = value;
  };
  const openVideo = (url) => {
    setModalOpen(true);
    setVideoUrl(url);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='slider'>
      <ul className='slider_container'>
        {
          bannerMovies.map(item => (
            <li key={item.id}>
              <Banner {...item} bannerBtnPrimaryOnClick={() => openVideo(item.video)} />
            </li>
          ))
        }
      </ul>

      <div className='slider__nav-buttons'>
        <input type='button' name='radio-btn' id='radio1' onClick={() => moveBanner('0')} />
        <input type='button' name='radio-btn' id='radio2' onClick={() => moveBanner('-100vw')} />
        <input type='button' name='radio-btn' id='radio3' onClick={() => moveBanner('-200vw')} />
        <label htmlFor='radio1' className='label1' />
        <label htmlFor='radio2' className='label2' />
        <label htmlFor='radio3' className='label3' />
      </div>

      <ModalVideo isOpen={modalOpen} onClose={closeModal} videoUrl={videoUrl} />

    </div>
  );
};

export default Slider;
