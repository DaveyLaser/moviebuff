import React, { Component } from 'react';
import RatedMovieCollection from './component/RatedMovieCollection.js';
import AddMovie from './component/AddMovie.js';
import Header from './component/Header.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <p>My Favorite Movies:</p>
        <RatedMovieCollection></RatedMovieCollection>
        <p>New Movie:</p>
        <AddMovie></AddMovie>
      </div>
    );
  }
}

export default App;
