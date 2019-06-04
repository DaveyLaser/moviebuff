import React, { Component } from 'react';
import FavoriteMovies from './component/FavoriteMovies';
import AddMovie from './component/AddMovie';
import Banner from './component/Banner';
import ENDPOINT from './endpoints';

const appStyle = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
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
  color: 'white',
};

const httpHeader = {
  'Content-Type': 'application/json'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies: [],
    }
  }

  componentDidMount() {
    fetch(ENDPOINT + '/api/movies')
      .then(response => response.json())
      .then(movies => this.setState({favoriteMovies: movies}))
      .catch(e => console.log(e));
  }

  onDeleteMovie = movieToDelete => event => {
    let newState = this.state.favoriteMovies.filter(
      movie => movie.name !== movieToDelete.name
    );

    this.setState({favoriteMovies: newState});
    fetch(ENDPOINT + '/api/movies/' + movieToDelete.name, {
        method: 'delete',
        body: movieToDelete.name,
        headers: httpHeader
    }).catch(e => console.log(e));
  }

  onAddMovie = movie => {
    if (this.state.favoriteMovies.some(
      existing => movie.name === existing.name
    )) {
      console.log("DEBUG: You cannot add the same movie twice!");
    } else if (movie.name === "" || movie.genre === "") {
      console.log("ERROR: Name and Genre fields must be populated")
    } else {
      let newState = [...this.state.favoriteMovies];
      newState.push(movie);
      this.setState({favoriteMovies: newState});
      fetch(ENDPOINT + '/api/movies', {
        method: 'post',
        body: JSON.stringify(movie),
        headers: httpHeader
      }).then(response => response.json())
        .then(data => console.log("Added: " + JSON.stringify(data)))
        .catch(e => console.log(e));
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
          <AddMovie onAdd={this.onAddMovie} />
          <Banner />
        </footer>
      </div>
    );
  }
}

export default App;
