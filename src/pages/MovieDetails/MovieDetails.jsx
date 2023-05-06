import { useState, useEffect } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';
import { useRef } from 'react';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Container, StyledBtnLink, MovDetBox } from './MovieDetails.styled';

const API_KEY = '7c36d10ef8eae7f493da1fadc9c612a4';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [visibleComponent, setVisibleComponent] = useState('cast');

  useEffect(() => {
    const fetchMovieDetails = async () => {
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
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const handleVisibleComponent = (component) => {
    setVisibleComponent(component);
  };

  return (
    <>
      <StyledBtnLink to={backLinkLocationRef.current}>Go back</StyledBtnLink>
      <Container>
        <MovDetBox>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <ul>
            <li>
              <NavLink
                to={`/movies/${movieId}/cast`}
                onClick={() => handleVisibleComponent('cast')}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/movies/${movieId}/reviews`}
                onClick={() => handleVisibleComponent('reviews')}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </MovDetBox>

        {visibleComponent === 'cast' && <Cast credits={credits} movieId={movieId} />}
        {visibleComponent === 'reviews' && <Reviews reviews={reviews} movieId={movieId} />}
        <Outlet />
      </Container>
    </>
  );
};

export default MovieDetails;

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { NavLink, Outlet, useParams, useLocation, Link } from 'react-router-dom';
// import { useRef } from 'react';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
// import { Container, StyledBtnLink, MovDetBox } from './MovieDetails.styled';

// const API_KEY = '7c36d10ef8eae7f493da1fadc9c612a4';

// const MovieDetails = () => {
//   const location = useLocation();
//   const [credits, setCredits] = useState([]);
//   const [reviews, setReviews] = useState([]);
//   const [movie, setMovie] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
//   const { movieId } = useParams();

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         setIsLoading(true);
//         if (!movieId) return;
//         const [creditsResponse, reviewsResponse] = await Promise.all([
//           axios.get(
//             `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
//           ),
//           axios.get(
//             `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
//           ),
//           axios.get(
//             `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//           ),
//         ]);

//         setMovie(creditsResponse.data);
//         setCredits(creditsResponse.data.cast);
//         setReviews(reviewsResponse.data.results);
//         setIsLoading(false);
//       } catch (error) {
//         setError(true);
//         setIsLoading(false);
//         console.log(error);
//       }
//     };
//     fetchMovieDetails();
//   }, [movieId]);

//   return (
//     <>
//       <StyledBtnLink to={backLinkLocationRef.current}>Go back</StyledBtnLink>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Something went wrong.</p>}
//       {movie && (
//         <Container>
//           <img
//             src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//             alt={movie.title}
//           />
//           <MovDetBox>
//             <h2>{movie.title}</h2>
//             <p>{movie.overview}</p>
//             <p>
//               {movie.genres &&
//                 movie.genres.map(genre => (
//                   <span key={genre.id}>{genre.name} </span>
//                 ))}
//             </p>
//             <ul>
//               <li>
//                 <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
//               </li>
//               <li>
//                 <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
//               </li>
//             </ul>
//           </MovDetBox>
//           <div>
//             <Link to={`/movies/${movieId}`}>
//               {credits && <Cast credits={credits} movieId={movieId} />}
//               {reviews && <Reviews reviews={reviews} movieId={movieId} />}
//               <Outlet />
//             </Link>
//           </div>
//           <Outlet />
//         </Container>
//       )}
//     </>
//   );
// };

// export default MovieDetails;
