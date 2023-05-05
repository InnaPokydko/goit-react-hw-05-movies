import { Link } from "react-router-dom";
import { Container, List, Item, Title, Poster } from "./MovieList.styled";

const MovieList = ({ movies }) => {
  return (
    <Container>
      <List>
        {movies.map(({ id, title, name, poster_path }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`}>              
              <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width={320}/>
              <Title>{title || name}</Title>            
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default MovieList;