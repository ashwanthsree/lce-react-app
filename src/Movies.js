import React from 'react';
import { Movie } from './Movie';
import { useMoviesAddUpdate } from './hooks/useMoviesAddUpdate';

export const Movies = () => {
  const { movies } = useMoviesAddUpdate();

  return (
    <section className="Movies">
      <h2>My Movies</h2>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
};