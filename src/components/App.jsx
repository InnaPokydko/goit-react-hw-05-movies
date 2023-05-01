import { Routes, Route, Link } from 'react-router-dom';
import Home from 'path/to/pages/Home';
import Movies from 'path/to/pages/Movies';
import MovieDetails from 'path/to/pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/movieDetails">MovieDetails</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
