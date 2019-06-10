import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Banner from './Banner'
import AddMovie from './AddMovie'
import {createMovie, updateCreateMovie} from '../state/actions'

const footerStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: 0,
  alignItems: 'center',
  color: 'white',
}

const addMovie = (allGenres, createMovie, updateCreateMovie) => (
  <div className="AddMovie">
    {
      allGenres
      ? <AddMovie
          allGenres={allGenres}
          createMovie={createMovie}
          updateCreateMovie={updateCreateMovie}
        />
      : ''
    }
  </div>
)

let Footer = ({allGenres, createMovie, updateCreateMovie}) => (
  <footer style={footerStyle}>
    {addMovie(allGenres, createMovie, updateCreateMovie)}
    <Banner/>
  </footer>
)

Footer.propTypes = {
  allGenres: PropTypes.array,
  addMovie: PropTypes.func,
  updateAddMovie: PropTypes.func
}

const mapStateToProps = state => ({
  allGenres: state.allGenres,
})

const mapDispatchToProps = {
  createMovie: createMovie,
  updateCreateMovie: updateCreateMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
