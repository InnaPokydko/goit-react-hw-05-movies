import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY='7c36d10ef8eae7f493da1fadc9c612a4';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
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
    <main>
      <h1>Popular movies</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Sory, there is no movies</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Home;
