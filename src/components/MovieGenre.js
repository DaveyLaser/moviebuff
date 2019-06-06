import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import ENDPOINT from '../common/endpoints'

const styles = theme => ({
  movieGenre: {
    display: 'flex',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
      genre: this.props.genre,
      label: "Genre",
      genres: [],
    }
  }

  componentDidMount() {
    fetch(ENDPOINT + "/api/movie-genres")
      .then(response => response.json())
      .then(genres => this.setState({genres}))
      .catch(error => console.log('An error occurred!', error))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.genre === "") {
      this.setState({genre: ""});
    }
  }

  onGenreChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      label: ""
    })
    
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.movieGenre}>
        <TextField
          select
          label={this.state.genre ? "" : this.state.label}
          value={this.state.genre || ""}
          className={classes.textField}
          InputProps={{
            name: "genre",
            className: classes.input,
            readOnly: this.props.readOnly,
          }}
          onChange={this.onGenreChange}
        >
        {
          this.state.genres.map(genre => (
            <MenuItem key={genre} value={genre}>{genre}</MenuItem>
          ))
        }
        </TextField>
      </div>
    )
  }
}

export default withStyles(styles)(MovieGenre)
