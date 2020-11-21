import React, { useEffect, useState } from 'react';
import MovieItem from '../movieItem/MovieItem';
import { allMovies, newMovies, popularMovies, trendsMovies, favoritesMovies, recommendedMovies } from './filtersFunctions';
import './moviesList.scss';
import Tabs from '../tabs/Tabs';

const MoviesList = (props) => {
  const { dataMovies } = props;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

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
              <MovieItem {...item} bannerBtnPrimaryOnClick={() => alert(item.video)} />
            </li>

          ))
        }
      </ul>

    </div>
  );
};

export default MoviesList;
