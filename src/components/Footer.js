import React from 'react'
import Banner from './Banner'
import AddMovie from './AddMovie'

const footerStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: 0,
  alignItems: 'center',
  color: 'white',
}

let Footer = () => (
  <footer style={footerStyle}>
    <AddMovie/>
    <Banner />
  </footer>
)

export default Footer
