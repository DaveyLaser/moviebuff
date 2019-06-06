import React, { Component } from 'react'
import MovieName from './MovieName'
import MovieGenre from './MovieGenre'
import MovieRating from './MovieRating'
import DeleteButton from './DeleteButton'
import ENDPOINT from '../common/endpoints'

const movieInfoRowStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: 'whitesmoke',
}

class MovieInfoRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: this.props.movie
    }
  }

  onNameChange = name => {
    let oldName = this.state.movie.name;
    this.setState({
      movie: {...this.state.movie, name: name}
    }, () => this.updateMovie(oldName));
  }

  onGenreChange = genre => {
    this.setState({
      movie: {...this.state.movie, genre: genre}
    }, () => this.updateMovie());
  }

  onRatingChange = rating => {
    this.setState({
      movie: {...this.state.movie, rating: rating}
    }, () => this.updateMovie());
  }

  updateMovie = (oldMovieName) => {
    if (!oldMovieName) {
      oldMovieName = this.state.movie.name;
    } 
    const url = ENDPOINT + `/api/movies/${encodeURIComponent(oldMovieName)}`;
    fetch(url, {
      method: 'put',
      body: JSON.stringify(this.state.movie),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(json => console.log('Updated: ' + JSON.stringify(json)))
      .catch(e => console.log('An error occurred! ' + e));
  }

  render() {
    return (
      <div className="MovieInfoRow" style={movieInfoRowStyle}>
        <MovieName name={this.state.movie.name} onChange={this.onNameChange} />
        <MovieGenre genre={this.state.movie.genre} onChange={this.onGenreChange} />
        <MovieRating rating={this.state.movie.rating} onChange={this.onRatingChange}/>
        <DeleteButton movie={this.state.movie}/>
      </div>
    )
  }
}

export default MovieInfoRow
