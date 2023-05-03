import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';

const API_KEY='7c36d10ef8eae7f493da1fadc9c612a4';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    if (query) {
      setSearchQuery(query);
    }
  }, [location.search]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setSearchParams({ query });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  return (
    <main>
      <h2>Movies</h2>
      <Searchbar onSubmit={handleSearch} />
      {movies && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;