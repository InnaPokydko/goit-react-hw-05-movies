import { Link } from "react-router-dom";

export const MovieList = ({ movies }) => {
  return (
    <Container>
      {movies.map((movie) => (
        <CardWrapper key={movie.id}>
          <Link to={`${movies.id}`}>
            {/* <img src="https://via.placeholder.com/200x100" alt="" /> */}
            <ProductName>{movie.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};