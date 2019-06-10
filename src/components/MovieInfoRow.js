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
      allGenres: this.props.allGenres
    }
  }

  onNameChange = name => {
    let oldName = this.state.movieName;
    this.setState({
      movieName: name,
    }, () => this.updateMovie(oldName));
  }

  onGenreChange = genre => {
    this.setState({
      movieInfo: {...this.state.movieInfo, genre: genre}
    }, () => this.updateMovie());
  }

  onRatingChange = rating => {
    this.setState({
      movieInfo: {...this.state.movieInfo, rating: rating}
    }, () => this.updateMovie());
  }

  updateMovie = (oldMovieName) => {
    if (!oldMovieName) {
      oldMovieName = this.state.movieName;
    } 
    // const url = ENDPOINT + `/api/movies/${encodeURIComponent(oldMovieName)}`;
    // fetch(url, {
    //   method: 'put',
    //   body: JSON.stringify(this.state.movieInfo),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(response => response.json())
    //   .then(json => console.log('Updated: ' + JSON.stringify(json)))
    //   .catch(e => console.log('An error occurred! ' + e));
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
