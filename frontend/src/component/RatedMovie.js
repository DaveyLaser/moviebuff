import React, { Component } from 'react';
import MovieName from './MovieName.js';
import MovieGenre from './MovieGenre.js';
import MovieRating from './MovieRating.js';

const ratedMovieStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: 'whitesmoke',
}

class RatedMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      genre: this.props.genre,
      rating: this.props.rating
    }
  }
  render() {
    return (
      <div className="RatedMovie" style={ratedMovieStyle}>
        <MovieName name={this.state.name} />
        <MovieGenre genre={this.state.genre} />
        <MovieRating rating={this.state.rating} />
        {this.props.children}
      </div>
    );
  }
}

export default RatedMovie;