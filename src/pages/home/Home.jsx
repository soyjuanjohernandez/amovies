import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/movies')
  //     .then(response => response.json())
  //     .then(data => setMovies(data));
  // }, []);
  // console.log('MOVIES STATE', movies);
  return (
    <main>
      <Slider />
    </main>
  );
};

export default Home;
