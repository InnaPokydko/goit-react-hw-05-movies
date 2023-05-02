// import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  // useState
  // useEffect
  return (
    <>
      <h1>MovieDetails: ${movieId}</h1>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

// const MovieDetails = () => {
//     return (
//       <main>
//         <h1>MovieDetails</h1>
//       </main>
//     );
//   };

export default MovieDetails;
