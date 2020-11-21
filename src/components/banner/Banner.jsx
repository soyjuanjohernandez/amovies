import React, { useEffect, useState } from 'react';
import './banner.scss';
import Button from '../button/Button';

const Banner = (props) => {

  const { title, description, bannerBtnPrimaryOnClick, bannerBtnSecondaryOnClick, cover, coverMobile, id } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 750 ? cover : coverMobile ;
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
      className={`banner banner${id}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      id={id}
    >
      <div className='banner__container'>
        <div className='banner__info'>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className='banner__buttons'>
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
    </div>
  );
};

export default Banner;
