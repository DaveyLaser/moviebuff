import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import MovieInfoRow from './MovieInfoRow'
import SectionWrapper from './SectionWrapper'
import DeleteButton from './DeleteButton'

let FavoriteMovies = ({movies}) => {
  let ratedMovieCollection = (movies && movies.length > 0) ?
  <div className="RatedMovieCollection">
    {movies.map((movie, idx) => (
      <MovieInfoRow key={idx} movie={movie}>
        <DeleteButton movie={movie}/>
      </MovieInfoRow>
    ))}
  </div>
  : ''

  return (
    <SectionWrapper
      title="My favorite movies:"
      backgroundColor="darkgray"
    >
      {ratedMovieCollection}
    </SectionWrapper>
  )
}

FavoriteMovies.propTypes = {
  movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps, null)(FavoriteMovies)
