import { useState, useEffect, Suspense } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import {
  Container,
  StyledBtnLink,
  MovDetBox,
  DetailsBox,
} from './MovieDetails.styled';

const API_KEY = '7c36d10ef8eae7f493da1fadc9c612a4';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [visibleComponent, setVisibleComponent] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        const movieData = await movieResponse.json();
        setMovie(movieData);

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        const creditsData = await creditsResponse.json();
        setCredits(creditsData.cast);

        const reviewsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData.results);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const handleVisibleComponent = component => {
    setVisibleComponent(component);
  };

  return (
    <>
      <StyledBtnLink to={backLinkLocationRef.current}>Go back</StyledBtnLink>
      <Container>
        <MovDetBox>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://cdn.pixabay.com/photo/2018/03/22/02/37/background-3249063_960_720.png'
            }
            alt={movie.title}
            width={400}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>
            {movie.genres &&
              movie.genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
              ))}
          </p>
          <DetailsBox>
            <li>
              <Link
                to={`/movies/${movieId}/cast`}
                onClick={() => handleVisibleComponent('cast')}
                style={{ display: movie.poster_path ? 'block' : 'none' }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={`/movies/${movieId}/reviews`}
                onClick={() => handleVisibleComponent('reviews')}
                style={{ display: movie.poster_path ? 'block' : 'none' }}
              >
                Reviews
              </Link>
            </li>
          </DetailsBox>
        </MovDetBox>

        {visibleComponent === 'cast' && (
          <Cast credits={credits} movieId={movieId} />
        )}

        {visibleComponent === 'reviews' && (
          <Reviews reviews={reviews} movieId={movieId} />
        )}

        {!movie.poster_path && (
          <div>
            <p>Movie not found</p>
          </div>
        )}

        {movie.poster_path && (
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        )}
      </Container>
    </>
  );
};

export default MovieDetails;


