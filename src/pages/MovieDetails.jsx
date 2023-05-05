import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { useRef } from 'react';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const API_KEY = '7c36d10ef8eae7f493da1fadc9c612a4';

const MovieDetails = () => {
  const location = useLocation();
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const [creditsResponse, reviewsResponse] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
          ),
        ]);
        setMovie(creditsResponse.data);
        setCredits(creditsResponse.data.cast);
        setReviews(reviewsResponse.data.results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

    return (
    <>
      <Link to={backLinkLocationRef.current}>Back</Link>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong.</p>}
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>
            {movie.genres &&
              movie.genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
              ))}
          </p>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <ul>
  <li>
  <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
  </li>
</ul>
          {credits && <Cast credits={credits} />}
          {reviews && <Reviews reviews={reviews} />}
          <Outlet />
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;




// const updateCredits = event => {
//   setCredits(event.target.value);
// };

// const updateReviews = event => {
//   setReviews(event.target.value);
// };
