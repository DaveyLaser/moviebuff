import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const movieGenreStyle = {
  display: 'flex',
};

const selectStyle = {
  color: 'whitesmoke',
  width: '120px',
  textAlign: 'left',
};

class MovieGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: this.props.genre,
    }
  }
  render() {
    return (
      <div className="MovieGenre" style={movieGenreStyle}>
        <Select
          value={this.props.genre || ""}
          style={selectStyle}
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