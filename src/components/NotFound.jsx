import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv`} alt="Page not found" width={400} />
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;