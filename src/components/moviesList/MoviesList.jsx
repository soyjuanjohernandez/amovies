import React, { useEffect, useState } from 'react';
import MovieItem from '../movieItem/MovieItem';
import { allMovies, newMovies, popularMovies, trendsMovies, favoritesMovies, recommendedMovies } from './filtersFunctions';
import './moviesList.scss';
import Tabs from '../tabs/Tabs';
import ModalVideo from '../modalVideo/ModalVideo';

const MoviesList = (props) => {
  const { dataMovies } = props;
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  const openVideo = (url) => {
    setModalOpen(true);
    setVideoUrl(url);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='movies-list'>
      <Tabs
        allOnClick={() => allMovies(dataMovies, setMovies)}
        newOnClick={() => newMovies(dataMovies, setMovies)}
        popularOnClick={() => popularMovies(dataMovies, setMovies)}
        trendsOnClick={() => trendsMovies(dataMovies, setMovies)}
        favoritesOnClick={() => favoritesMovies(dataMovies, setMovies)}
        recommendationsOnClick={() => recommendedMovies(dataMovies, setMovies)}
      />
      <ul className='movies-list_items'>
        {
          movies.map(item => (
            <li key={item.id}>
              <MovieItem {...item} bannerBtnPrimaryOnClick={() => openVideo(item.video)} />
            </li>
          ))
        }
      </ul>

      <ModalVideo isOpen={modalOpen} onClose={closeModal} videoUrl={videoUrl} />

    </div>
  );
};

export default MoviesList;
