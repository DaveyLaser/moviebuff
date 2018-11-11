import React from 'react';
import MovieGenre from './MovieGenre.js';
import MovieRating from './MovieRating.js';
import MovieName from './MovieName.js';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './AddMovie.css';

class AddMovie extends React.Component {
  render() {
    return(
      <div className="AddMovie">
        <MovieName></MovieName>
        <MovieGenre></MovieGenre>
        <MovieRating></MovieRating>
        <Button>
          <AddIcon></AddIcon>
        </Button>
      </div>
    )
  }
}

export default AddMovie;