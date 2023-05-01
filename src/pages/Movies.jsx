import { MovieList } from "components/MovieList/MovieList";

export const Movies = () => {
  const movies = getMovies();
  return (
    <main>
      <ProductList movies={movies} />
    </main>
  );
};