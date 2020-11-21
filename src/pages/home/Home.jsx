import React, { useEffect, useState } from 'react';
import MoviesList from '../../components/moviesList/MoviesList';
import Slider from '../../components/Slider/Slider';
import getMovies from '../../hooks/getMovies';
import Movies from '../../../movies.json';

const Home = () => {

  // const API_URL = 'http://localhost:3000/movies';
  // const dataMovies = getMovies(API_URL);
  const dataMovies = Movies;

  return (
    <main>
      <Slider dataMovies={dataMovies} />
      <MoviesList dataMovies={dataMovies} />
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5' }}>

        <h1>ANOTHER SECTION</h1>

      </div>
    </main>
  );
};

export default Home;
