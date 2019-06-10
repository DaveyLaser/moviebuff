import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import MovieInfoRow from './MovieInfoRow'
import SectionWrapper from './SectionWrapper'

const ratedMovieCollection = (movies, genres) => (
    <div className="RatedMovieCollection">
      {Object.keys(movies).map(key =>
        <MovieInfoRow
          key={key}
          movieName={key}
          movieInfo={movies[key]}
          allGenres={genres}
        />
      )}
    </div>
)

const FavoriteMovies = ({movies, genres}) => (
  <SectionWrapper
    title="My favorite movies:"
    backgroundColor="darkgray"
  >
    {
      (movies && Object.keys(movies).length > 0) && (genres && genres.length > 0)
        ? ratedMovieCollection(movies, genres)
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

export default connect(mapStateToProps, null)(FavoriteMovies)
