import { Link } from 'react-router-dom';

const IMG_NOT_FOUND = 'https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv';
const NotFound_Title = 'Oops... nothing found...'
const NotFound = () => {
  return (
    <>
      <img src={IMG_NOT_FOUND} alt={NotFound_Title} />
      <Link to="/">Back to home</Link>
    </>
  );
};
export default NotFound;