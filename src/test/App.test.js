import React from 'react'
import ReactDOM from 'react-dom'
import App from '../containers/App'

describe('Simple render tests', () => {
  test('App renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
})
