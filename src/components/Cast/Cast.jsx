import { Link } from "react-router-dom";

const Cast = ({ credits }) => {
  return (
    <div>
      <h2>Cast:</h2>
      {credits && credits.map(({ id, name, character, profile_path }) => (
        <div key={id}>
          <Link to={`/movies/${id}/credits`}>
          <h3>{name}</h3>
          <p>Character: {character}</p>
          <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cast;