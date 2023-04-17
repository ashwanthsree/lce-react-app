import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MoviesContext, MovieActions } from '../MoviesProvider';

export const useMoviesAddUpdate = () => {
  const context = React.useContext(MoviesContext);

  // if (!context) {
  //   throw new Error('useMoviesContext must be used inside a MoviesProvider');
  // }

  const { state, dispatch } = context;
  const { movies } = state;

  const addMovie = movie => {
    movie.id = uuidv4();
    movie.watched = false;
    dispatch({ type: MovieActions.ADD_MOVIE, payload: movie });
  };

  const markWatchedMovie = id => {
    dispatch({ type: MovieActions.MARK_WATCHED_MOVIE, payload: { id } });
  };

  const showWatchedMovies = () => {
    dispatch({ type: MovieActions.WATCHED_MOVIES, payload: {} });
  };

  return { movies, addMovie, markWatchedMovie, showWatchedMovies };
};