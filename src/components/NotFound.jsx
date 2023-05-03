import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>Sory, nothing found...</h2>
      <Link to="/">Back to home</Link>
    </>
  );
};
export default NotFound;