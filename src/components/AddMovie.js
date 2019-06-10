import React from 'react'
import {connect} from 'react-redux'
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

let AddMovie = ({movie, allGenres}) => {
  if (movie === undefined) {
    movie = {...defaultMovie};
  }

  if (allGenres === undefined) {
    allGenres = []
  }

  return(
    <div className="AddMovie" style={addMovieStyle}>
      <div/>
      <div style={centerStyle}>
        <div style={headerStyle}>
          <p>Add a favorite:</p>
        </div>
        <div style={rowStyle}>
          <MovieName
            name={movie.name}
            onChange={() => {}}
          />
          <MovieGenre
            genre={movie.genre}
            onChange={() => {}}
            allGenres={allGenres}
          />
          <MovieRating
            rating={movie.rating}
            onChange={() => {}}
          />
          <AddButton onAdd={() => {}}/>
        </div>
      </div>
      <div/>
    </div>
  )
}

AddMovie.propTypes = {
  movie: PropTypes.object,
  allGenres: PropTypes.array
}

const mapStateToProps = state => ({
  movie: state.movie,
  allGenres: state.genres
})

export default connect(mapStateToProps, null)(AddMovie)
