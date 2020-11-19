import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';

const Slider = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  console.log('MOVIES STATE', movies);

  const bannerMovies = movies.filter(item => item.isBanner === true);

  console.log('MOVIE FILTERED', bannerMovies);

  return (
    <div>
      {
        bannerMovies.map(item => <Banner {...item} bannerBtnPrimaryOnClick={() => alert(item.video)} />)
      }

    </div>
  );
};

export default Slider;
