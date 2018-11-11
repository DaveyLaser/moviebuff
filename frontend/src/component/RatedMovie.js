import React, { Component } from 'react';
import MovieName from './MovieName.js';
import MovieGenre from './MovieGenre.js';
import MovieRating from './MovieRating.js';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import './RatedMovie.css';

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
      <div className="RatedMovie">
        <MovieName
          name={this.state.name}
        />
        <MovieGenre
          genre={this.state.genre}
        />
        <MovieRating
          rating={this.state.rating}
        />
        <Button>
          <DeleteIcon></DeleteIcon>
        </Button>
      </div>
    );
  }
}

export default RatedMovie;