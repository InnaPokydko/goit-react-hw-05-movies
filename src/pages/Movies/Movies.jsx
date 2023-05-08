import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import { toast } from 'react-toastify';
import { MoviesBox } from './Movie.styled';
import { StyledBtnLink } from 'pages/MovieDetails/MovieDetails.styled';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = '7c36d10ef8eae7f493da1fadc9c612a4';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState(
    searchParams.get('movieId') ?? ''
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!searchMovie) return;
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
        );
        setMovies(response.data.results);
      } catch (error) {
        toast.error(error.message);
        console.error(error);
      }
    };
    fetchMovies();
  }, [searchMovie]);

  const updateQueryString = evt => {
    const searchValue = evt.target.value;
    if (searchValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: searchValue });
  };

  const handleSearchSubmit = searchValue => {
    setSearchParams({ movieId: searchValue });
    setSearchMovie(searchValue);
  };

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );

  return (
    <>
      <StyledBtnLink to="/">Go Back</StyledBtnLink>
      <MoviesBox>
        <Searchbar
          onSubmit={handleSearchSubmit}
          type="text"
          value={searchMovie}
          onChange={updateQueryString}
        />
        <MovieList movies={visibleMovies} />
      </MoviesBox>
    </>
  );
};

export default Movies;

//   const [query, setQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams({ query: '' });
//   const location = useLocation();
//   const movieId = searchParams.get('movieId') ?? '';

//   useEffect(() => {
//     const searchQuery = searchParams.get('query');
//     if (searchQuery) {
//       setQuery(searchQuery);
//     }
//   }, [location.search, searchParams]);

//   const handleSearch = async (query) => {
//     setQuery(query);
//     setSearchParams({ query });
//   };

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchMovies();
//   }, [query]);

//   const visibleMovies = movies.filter(movie => movie.includes(movieId));

//   return (
//     <div>
//       <h2>Movies</h2>
//       <Searchbar onSubmit={handleSearch} />
//       {movies && <MovieList movies={movies} />}
//     </div>
//   );
// };

// export default Movies;
