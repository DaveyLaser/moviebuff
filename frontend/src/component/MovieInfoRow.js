import React, { Component } from 'react';
import MovieName from './MovieName';
import MovieGenre from './MovieGenre';
import MovieRating from './MovieRating';

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

  render() {
    return (
      <div className="MovieInfoRow" style={movieInfoRowStyle}>
        <MovieName name={this.state.name} readOnly={true} />
        <MovieGenre genre={this.state.genre} readOnly={false} />
        <MovieRating rating={this.state.rating} readOnly={false} />
        {this.props.children}
      </div>
    );
  }
}

export default MovieInfoRow;