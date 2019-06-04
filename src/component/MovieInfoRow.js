import React, { Component } from 'react';
import MovieName from './MovieName';
import MovieGenre from './MovieGenre';
import MovieRating from './MovieRating';
import ENDPOINT from './../endpoints';

const movieInfoRowStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: 'whitesmoke',
};

class MovieInfoRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      genre: this.props.genre,
      rating: this.props.rating
    }
  }

  onNameChange = name => {
    let oldName = this.state.name;
    this.setState({
      name: name,
    }, () => this.updateMovie(oldName));
  }

  onGenreChange = genre => {
    this.setState({
      genre: genre,
    }, () => this.updateMovie());
  }

  onRatingChange = rating => {
    this.setState({
      rating: rating,
    }, () => this.updateMovie());
  }

  updateMovie = (oldMovieName) => {
    if (!oldMovieName) {
      oldMovieName = this.state.name;
    } 
    fetch(ENDPOINT + `/api/movies/${encodeURIComponent(oldMovieName)}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log("Updated: " + JSON.stringify(data)))
      .catch(e => console.log("I was lazy here: " + e));
  }

  render() {
    return (
      <div className="MovieInfoRow" style={movieInfoRowStyle}>
        <MovieName name={this.state.name} onChange={this.onNameChange} />
        <MovieGenre genre={this.state.genre} onChange={this.onGenreChange} />
        <MovieRating rating={this.state.rating} onChange={this.onRatingChange}/>
        {this.props.children}
      </div>
    );
  }
}

export default MovieInfoRow;