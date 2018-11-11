import React, { Component } from 'react';
import RatedMovieCollection from './component/RatedMovieCollection.js';
import AddMovie from './component/AddMovie.js';
import Banner from './component/Banner.js';

const appStyle = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  color: 'whitesmoke',
  backgroundColor: 'darkgray',
  minHeight: '100vh',
  minWidth: '100vw',
  alignItems: 'center',
};

const footerStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: 0,
};

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <header>
          <Banner />
        </header>
        <RatedMovieCollection></RatedMovieCollection>
        <footer style={footerStyle}>
          <AddMovie></AddMovie>
          <Banner />
        </footer>
      </div>
    );
  }
}

export default App;
