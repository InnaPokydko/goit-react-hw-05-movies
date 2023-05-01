import { MovieList } from "components/MovieList/MovieList";

export const Movies = () => {
  const movies = null;
  return (
    <main>
      <h2>MovieList</h2>
      <MovieList movies={movies} />
    </main>
  );
};