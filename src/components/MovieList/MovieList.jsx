import { Link } from "react-router-dom";
import { Container, MovieWrapper } from "./MovieList.styled";

 const MovieList = ({ movies }) => {
  return (
    <Container>
      {movies.map((movie) => (
        <MovieWrapper key={movie.id}>
          <Link to={`${movies.id}`}>
                    
          </Link>
        </MovieWrapper>
      ))}
    </Container>
  );
};

export default MovieList;