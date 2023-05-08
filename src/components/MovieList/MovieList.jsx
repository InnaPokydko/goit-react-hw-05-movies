import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  Container,
  List,
  Item,
  Title,
  Poster,
  MovieLink,
} from './MovieList.styled';

const defImg =
  'https://img.freepik.com/premium-vector/cartoon-film-camera-with-sign-that-says-movie-it_133260-5246.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      <List>
        {movies.map(({ id, title, name, poster_path }) => {
          const imgSrc = poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defImg;

          return (
            <Item key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <Poster src={imgSrc} alt={title || name} width={320} id={id} />
                <Title>{title || name}</Title>
              </MovieLink>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MovieList;


