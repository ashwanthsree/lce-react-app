import React from 'react';
export const Movie = ({ movie }) => {

  return (
    <article className="Movie">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <div className="Movie-actions">
      </div>
    </article>
  );
};