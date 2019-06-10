import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import MovieInfoRow from './MovieInfoRow'
import SectionWrapper from './SectionWrapper'
import {updateMovie, deleteMovie} from '../state/actions'

const ratedMovieCollection = (movies, genres, updateMovie, deleteMovie) => (
    <div className="RatedMovieCollection">
      {Object.keys(movies).sort().map(key =>
        <MovieInfoRow
          key={key}
          movieName={key}
          movieInfo={movies[key]}
          allGenres={genres}
          updateMovie={updateMovie}
          deleteMovie={deleteMovie}
        />
      )}
    </div>
)

const FavoriteMovies = ({movies, genres, updateMovie, deleteMovie}) => (
  <SectionWrapper
    title="My favorite movies:"
    backgroundColor="darkgray"
  >
    {
      (movies && Object.keys(movies).length > 0) && (genres && genres.length > 0)
        ? ratedMovieCollection(movies, genres, updateMovie, deleteMovie)
        : ''
    }
  </SectionWrapper>
)

FavoriteMovies.propTypes = {
  movies: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies,
  genres: state.genres
})

const mapDispatchToProps = {
  updateMovie: updateMovie,
  deleteMovie: deleteMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovies)
