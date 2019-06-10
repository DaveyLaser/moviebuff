import React, { Component } from 'react'
import MovieName from './MovieName'
import MovieGenre from './MovieGenre'
import MovieRating from './MovieRating'
import DeleteButton from './DeleteButton'

const movieInfoRowStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: 'whitesmoke',
}

class MovieInfoRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieName: this.props.movieName,
      movieInfo: this.props.movieInfo,
      allGenres: this.props.allGenres,
      updateMovie: this.props.updateMovie
    }
  }

  onNameChange = name => {
    let oldName = this.state.movieName;
    this.setState({
      movieName: name,
    }, () => this.state.updateMovie(
      oldName, {
        name: name,
        genre: this.state.movieInfo.genre,
        rating: this.state.movieInfo.rating
      }));
  }

  onGenreChange = genre => {
    this.setState({
      movieInfo: {...this.state.movieInfo, genre: genre}
    }, () => this.state.updateMovie(
      this.state.movieName, {
        name: this.state.movieName,
        genre: genre,
        rating: this.state.movieInfo.rating
      }
    ));
  }

  onRatingChange = rating => {
    this.setState({
      movieInfo: {...this.state.movieInfo, rating: rating}
    }, () => this.state.updateMovie(
      this.state.movieName, {
        name: this.state.movieName,
        genre: this.state.movieInfo.genre,
        rating: rating
      }
    ));
  }

  render() {
    return (
      <div className="MovieInfoRow" style={movieInfoRowStyle}>
        <MovieName name={this.state.movieName} onChange={this.onNameChange} />
        <MovieGenre genre={this.state.movieInfo.genre} allGenres={this.state.allGenres} onChange={this.onGenreChange} />
        <MovieRating rating={this.state.movieInfo.rating} onChange={this.onRatingChange}/>
        <DeleteButton movieName={this.state.movieName}/>
      </div>
    )
  }
}

export default MovieInfoRow
