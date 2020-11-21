import React, { useEffect, useState } from 'react';
import MoviesList from '../../components/moviesList/MoviesList';
import Slider from '../../components/Slider/Slider';
import getMovies from '../../hooks/getMovies';

const Home = () => {

  const API_URL = 'http://localhost:3000/movies';
  const dataMovies = getMovies(API_URL);

  return (
    <main>
      <Slider dataMovies={dataMovies} />
      <MoviesList dataMovies={dataMovies} />
    </main>
  );
};

export default Home;
