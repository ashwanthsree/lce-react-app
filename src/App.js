import React from 'react';
import { Movies } from './Movies';
import { MoviesProvider } from './MoviesProvider';
import { NewMovie } from './NewMovie';
import './App.css';

const App = () => {
  return (
    <>
      <h1 className='App-header'>Let us talk movies</h1>
      <div className="App">
        <MoviesProvider>
          <NewMovie />
          <Movies />
        </MoviesProvider>
      </div>
    </>
  );
};

export default App;