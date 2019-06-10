import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = makeStyles({
  movieGenre: {
    display: 'flex',
  },
  textField: {
    marginLeft: 0,
    marginRight: 0,
    width: "200px",
    textAlign: "left",
  },
  input: {
    color: "white"
  }
})

let MovieGenre = ({genre, allGenres, onChange}) => {
  const classes = styles();
  return (
    <div className={classes.movieGenre}>
      <TextField
        select
        value={genre}
        className={classes.textField}
        InputProps={{
          name: "genre",
          className: classes.input,
          readOnly: false
        }}
        onChange={onChange}
      >
        {
          allGenres ? allGenres.map(genre => (
            <MenuItem key={genre} value={genre}>{genre}</MenuItem>
          )) : ''
        }
      </TextField>
    </div>
  )
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  allGenres: PropTypes.array,
  onChange: PropTypes.func.isRequired
}

export default MovieGenre
