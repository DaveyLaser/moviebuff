import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './MovieGenre.css';

class MovieGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: this.props.genre,
    }
  }
  render() {
    return (
      <div className="MovieGenre">
        <Select
          value={this.props.genre}
        >
          <MenuItem value="Suspense">Suspense</MenuItem>
          <MenuItem value="RomCom">RomCom</MenuItem>
          <MenuItem value="Comedy">Comedy</MenuItem>
          <MenuItem value="Romance">Romance</MenuItem>
          <MenuItem value="Fantasy">Fantasy</MenuItem>
          <MenuItem value="Drama">Drama</MenuItem>
        </Select>
      </div>
    );
  }
}

export default MovieGenre;