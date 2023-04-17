import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialMovies = [
  {
    id: uuidv4(),
    title: 'The Godfather',
    year: 1972,
    watched: false,
  },
  {
    id: uuidv4(),
    title: 'Inception',
    year: 2010,
    watched: false,
  },
]

export const MovieActions = {
  ADD_MOVIE : 'ADD_MOVIE',
  MARK_WATCHED_MOVIE : 'MARK_WATCHED_MOVIE',
  WATCHED_MOVIES : 'MARK_WATCHED_MOVIE',
}

const moviesReducer = (state, action) => {
  switch (action.type) {
    case MovieActions.ADD_MOVIE: {
      const movies = [action.payload, ...state.movies];
      return {
        ...state,
        movies,
      };
    }
    case MovieActions.MARK_WATCHED_MOVIE: {
      const movies = state.movies.map(movie => {
        if (movie.id === action.payload.id) {
          return { ...movie, watched: !movie.watched };
        }

        return movie;
      });

      return {
        ...state,
        movies,
      };
    }
    case MovieActions.WATCHED_MOVIES: {
      const movies = state.movies.map(movie => {
        if (movie.watched) {return movie} ;
        return movie;
      });

      return {
        ...state,
        movies,
      };
    }

    default:
      throw new Error(`Action is not supported: ${action.type}`);
  }
};

const initialState = {
  movies: initialMovies,
};

export const MoviesContext = React.createContext();

export const MoviesProvider = props => {
  const [state, dispatch] = React.useReducer(moviesReducer, initialState);

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <MoviesContext.Provider value={value} {...props} />;
};