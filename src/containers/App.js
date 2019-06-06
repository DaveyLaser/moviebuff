import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FavoriteMovies from '../components/FavoriteMovies'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { getMoviesDispatch } from '../state/actions'

const appStyle = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  backgroundColor: 'darkgray',
  minHeight: '100vh',
  minWidth: '100vw',
  alignItems: 'center',
}

let App = ({movies, getMovies}) => {
  if (movies === undefined) {
    getMovies()
  }

  let favoriteMovies = movies === undefined ? <h2>Loading...</h2> : <FavoriteMovies movies={movies}/>;
  return (
    <div className="App" style={appStyle}>
      <header>
        <Banner/>
      </header>
      {favoriteMovies}
      <Footer/>
    </div>
  )
}

App.propTypes = {
  movies: PropTypes.array,
  getMovies: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  movies: state.movies
})

const mapDispatchToProps = {getMovies: getMoviesDispatch}

export default connect(mapStateToProps, mapDispatchToProps)(App)
