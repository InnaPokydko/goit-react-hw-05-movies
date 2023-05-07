import axios from 'axios';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MovieList from 'components/MovieList/MovieList';
import {
  Container,
    } from './Home.styled';

const API_KEY = '7c36d10ef8eae7f493da1fadc9c612a4';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    AOS.init();
    async function fetchPopularMovies() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(error);
      }
    }
    fetchPopularMovies();
  }, []);

  return (
    <>
        <Container>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Sorry, there are no movies</p>
      ) : (
        <MovieList movies={movies}/>
      )}
    </Container>
    </>
  );
};

export default Home;





// (
//   <MoviesPopular>
//     {movies &&
//       movies.map(({ id, title, name, poster_path }) => (
//         <MovieCard key={id} data-aos="fade-left">
//           <MoviePoster
//             src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
//             alt={title}
//             width={320}
//           />
//           <MovieTitle>{title || name}</MovieTitle>
//         </MovieCard>
//       ))}
//   </MoviesPopular>
// )
