import React, { useEffect, useState } from 'react';
import './banner.scss';
import Button from '../button/Button';

const Banner = (props) => {

  const { title, description, bannerBtnPrimaryOnClick, bannerBtnSecondaryOnClick, cover, coverMobile } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? cover : coverMobile ;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div
      className='banner'
      style={{ backgroundImage: `url(${imageUrl})` }}
    //   style={{ backgroundImage: `url(${cover})` }}
    >

      <div className='banner__container'>
        <div className='banner__info'>
          <h2>{title}</h2>
          <p>{description}</p>
          <Button
            name='watch now'
            title='watch now'
            onClick={bannerBtnPrimaryOnClick}
          />
          <Button
            name='more info'
            title='more info'
            style={{ marginLeft: 'var(--spacing-s)' }}
            onClick={bannerBtnSecondaryOnClick}
            appearance='secondary'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
