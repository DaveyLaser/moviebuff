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

let App = ({init, loading, getMovies}) => {
  if (init) {
    getMovies()
  }

  let favoriteMovies = loading ? <h2>Loading...</h2> : <FavoriteMovies/>;
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
  init: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  getMovies: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  init: state.init,
  loading: state.loading,
})

const mapDispatchToProps = {getMovies: getMoviesDispatch}

export default connect(mapStateToProps, mapDispatchToProps)(App)
