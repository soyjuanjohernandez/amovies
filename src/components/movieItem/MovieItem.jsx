import React from 'react';
import './movieItem.scss';
import Button from '../button/Button';

const MovieItem = (props) => {

  const { title, thumbnail, bannerBtnPrimaryOnClick, bannerBtnSecondaryOnClick, id } = props;

  return (

    <div
      className={`movie-item movie-item${id}`}
      style={{ backgroundImage: `url(${thumbnail})` }}
      id={id}
    >
      <div className='movie-item__overlay'>
        <h2>{title}</h2>
        <div className='movie-item__buttons'>
          <Button
            name='watch now'
            title='watch now'
            onClick={bannerBtnPrimaryOnClick}
          />
          <Button
            name='more info'
            title='more info'
            onClick={bannerBtnSecondaryOnClick}
            appearance='secondary'
          />
        </div>
      </div>
    </div>

  );
};

export default MovieItem;
