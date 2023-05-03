import { Link } from "react-router-dom";
import { Container } from "./MovieList.styled";

const MovieList = ({ movies }) => {
  return (
    <Container>
       <ul>
          {movies && movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
              <h2>{title}</h2>
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
              </Link>
            </li>
          ))}
        </ul>  
    </Container>
  );
};

export default MovieList;