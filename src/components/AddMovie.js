import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddButton from './AddButton'
import MovieName from './MovieName'
import MovieGenre from './MovieGenre'
import MovieRating from './MovieRating'

const addMovieStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: 'whitesmoke',
  minWidth: '100vw',
  justifyContent: 'space-evenly',
  backgroundColor: 'gray',
  paddingBottom: '1vh',
}

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const headerStyle = {
  display: 'flex',
  fontSize: '30px',
  color: 'whitesmoke',
}

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  color: 'whitesmoke',
}

const defaultMovie = {
  name: '',
  genre: '',
  rating: 0
}

class AddMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: defaultMovie,
      allGenres: this.props.allGenres,
      createMovie: this.props.createMovie,
      updateCreateMovie: this.props.updateCreateMovie
    }
  }

  onChange = movie => {
    this.setState({
      movie: movie
    })

    if (this.state.updateCreateMovie) {
      this.state.updateCreateMovie(this.state.movie)
    }
  }

  render() {
    return (
      <div className="AddMovie" style={addMovieStyle}>
        <div/>
        <div style={centerStyle}>
          <div style={headerStyle}>
            <p>Add a favorite:</p>
          </div>
          {
            this.state.movie && this.state.allGenres
              ?
                <div style={rowStyle}>
                  <MovieName
                    name={this.state.movie.name}
                    onChange={this.onChange}
                  />
                  <MovieGenre
                    genre={this.state.movie.genre}
                    allGenres={this.state.allGenres}
                    onChange={this.onChange}
                  />
                  <MovieRating
                    rating={this.state.movie.rating}
                    onChange={this.onChange}
                  />
                  <AddButton onAdd={this.state.addMovie}/>
                </div>
              :
                ''
          }
        </div>
        <div/>
      </div>
    )
  }
}

AddMovie.propTypes = {
  allGenres: PropTypes.array,
  addMovie: PropTypes.func,
  updateAddMovie: PropTypes.func
}

export default AddMovie
