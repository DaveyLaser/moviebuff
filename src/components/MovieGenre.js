import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = () => ({
  movieGenre: {
    display: 'flex',
  },
  textField: {
    width: "200px",
    textAlign: "left",
  },
  input: {
    color: "white"
  }
})

class MovieGenre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: "Genre",
      genre: this.props.genre,
      allGenres: this.props.allGenres,
      onChange: this.props.onChange
    }
  }

  onGenreChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      label: ""
    });

    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.movieGenre}>
        <TextField
          select
          label={this.state.genre ? '' : this.state.label}
          value={this.state.genre}
          className={classes.textField}
          InputProps={{
            name: "genre",
            className: classes.input,
            readOnly: false
          }}
          onChange={this.onGenreChange}
        >
          {
            this.state.allGenres ? this.state.allGenres.map(genre => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            )) : ''
          }
        </TextField>
      </div>
    )
  }
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  allGenres: PropTypes.array,
  onChange: PropTypes.func.isRequired
}

export default withStyles(styles)(MovieGenre)
