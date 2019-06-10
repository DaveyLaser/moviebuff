import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FavoriteMovies from '../components/FavoriteMovies'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { initState } from '../state/actions'

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

let App = ({isInit, init}) => {
  if (!isInit) {
    init()
  }

  return (
    <div className="App" style={appStyle}>
      <Header/>
      {isInit ? <FavoriteMovies/> : <h2>Loading...</h2> }
      <Footer/>
    </div>
  )
}

App.propTypes = {
  init: PropTypes.func.isRequired,
  isInit: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isInit: state.isInit
})

const mapDispatchToProps = {
  init: initState,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
