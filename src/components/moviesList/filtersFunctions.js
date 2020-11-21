export const allMovies = (dataMovies, setMovies) => {
  setMovies(dataMovies);
};

export const newMovies = (dataMovies, setMovies) => {
  const today = new Date();
  const yearNow = today.getFullYear();
  const newMoviesFiltered = dataMovies.filter(item => item.year >= yearNow - 2);
  setMovies(newMoviesFiltered);
};

export const popularMovies = (dataMovies, setMovies) => {
  const popularMoviesFiltered = dataMovies.filter(item => item.rating >= 4);
  setMovies(popularMoviesFiltered);
};

export const trendsMovies = (dataMovies, setMovies) => {
  const trendsMoviesFiltered = dataMovies.filter(item => item.trend === true);
  setMovies(trendsMoviesFiltered);
};

export const favoritesMovies = (dataMovies, setMovies) => {
  const favoritesMoviesFiltered = dataMovies.filter(item => item.favorite === true);
  setMovies(favoritesMoviesFiltered);
};

export const recommendedMovies = (dataMovies, setMovies) => {
  const recommendedMoviesFiltered = dataMovies.filter(item => item.recommended === true);
  setMovies(recommendedMoviesFiltered);
};
