const Cast = ({ credits }) => {
  return (
    <div>
      <h2>Cast:</h2>
      {credits && credits.map(actor => (
        <div key={actor.id}>
          <h3>{actor.name}</h3>
          <p>Character: {actor.character}</p>
          <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
        </div>
      ))}
    </div>
  );
};

export default Cast;