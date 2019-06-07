import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import MovieInfoRow from './MovieInfoRow'
import SectionWrapper from './SectionWrapper'

const ratedMovieCollection = (movies) => (
  (movies && movies.length > 0) ?
    <div className="RatedMovieCollection">
      {movies.map((movie, idx) => <MovieInfoRow key={idx} movie={movie}/>)}
    </div>
    : ''
)

let FavoriteMovies = ({movies}) => (
    <SectionWrapper
      title="My favorite movies:"
      backgroundColor="darkgray"
    >
      {ratedMovieCollection(movies)}
    </SectionWrapper>
)

FavoriteMovies.propTypes = {
  movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps, null)(FavoriteMovies)
