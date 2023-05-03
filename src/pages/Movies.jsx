import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';

const API_KEY = '7c36d10ef8eae7f493da1fadc9c612a4';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const location = useLocation();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [location.search, searchParams]);

  const handleSearch = async (query) => {
    setQuery(query);
    setSearchParams({ query });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <main>
      <h2>Movies</h2>
      <Searchbar onSubmit={handleSearch} />
      {movies && <MovieList movies={movies} />}
    </main>
  );
};

export default Movies;





// import { useState, useEffect } from 'react';
// import { useSearchParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Searchbar from 'components/Searchbar/Searchbar';
// import MovieList from 'components/MovieList/MovieList';

// const API_KEY = '7c36d10ef8eae7f493da1fadc9c612a4';

// const Movies = () => {
//   const [movies, setMovies] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams({ query: '' });
//   const location = useLocation();

//   useEffect(() => {
//     const searchQuery = searchParams.get('query');
//     if (searchQuery) {
//       setQuery(searchQuery);
//     }
//   }, [location.search, searchParams]);

//   const handleSearch = async (query) => {
//     setSearchParams({ query });
//   };

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchParams.get('query')}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchMovies();
//   }, [searchParams]);