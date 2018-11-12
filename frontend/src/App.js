import React, { Component } from 'react';
import FavoriteMovies from './component/FavoriteMovies';
import AddMovie from './component/AddMovie';
import Banner from './component/Banner';
import movies from './service/movies';

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
  alignItems: 'center',
  color: 'whitesmoke',
};

class App extends Component {
  constructor(props) {
    super(props);
    // this.onDelete = this.onDelete.bind(this);
    // this.onAdd = this.onAdd.bind(this);
    this.state = {
      favoriteMovies: [...movies],
    }
  }

  onDeleteMovie = key => event => {
    let newState = this.state.favoriteMovies.filter(
      movie => movie.name !== key
    );
  
    this.setState({
      favoriteMovies: newState,
    });
  }

  onAddMovie = movie => {
    if (this.state.favoriteMovies.some(
      existing => movie.name === existing.name
    )) {
      console.log("DEBUG: Array exists");
    } else if (movie.name === "" || movie.genre === "") {
      console.log("ERROR: Name and Genre fields must be populated")
    }
    else {
      let newState = [...this.state.favoriteMovies];
      newState.push(movie);
      this.setState({
        favoriteMovies: newState,
      });
    }
  }

  render() {
    return (
      <div className="App" style={appStyle}>
        <header>
          <Banner />
        </header>
        <FavoriteMovies
          onDelete={this.onDeleteMovie}
          movies={this.state.favoriteMovies}
        />
        <footer style={footerStyle}>
          <AddMovie onAdd={this.onAddMovie}/>
          <Banner />
        </footer>
      </div>
    );
  }
}

export default App;
