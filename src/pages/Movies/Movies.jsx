import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useRef } from 'react';
import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import { MoviesBox } from './Movie.styled';
import { StyledBtnLink } from 'pages/MovieDetails/MovieDetails.styled';

const API_KEY = '7c36d10ef8eae7f493da1fadc9c612a4';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!movieId) return;
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${movieId}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [movieId]);

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const handleSearchSubmit = searchValue => {
    setSearchParams({ movieId: searchValue });
  };

  const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(movieId.toLowerCase()));

  return (
    <>
    <StyledBtnLink to={backLinkLocationRef.current}>Go back</StyledBtnLink>
    <MoviesBox>
    <Searchbar onSubmit={handleSearchSubmit} type="text" value={movieId} onChange={updateQueryString} />
  <MovieList movies={visibleMovies} location={location} />
</MoviesBox></>
    
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
