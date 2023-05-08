import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Layout = lazy(() => import('./Layout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
// const NotFound = lazy(() => import('./NotFound'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search/search-movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} /> 
          <Route path="reviews" element={<Reviews />} /> 
        </Route>
      </Route>
      <Route
          path="*"
          element={<Navigate to="/" replace/>} />
    </Routes>
  );
};

export default App;