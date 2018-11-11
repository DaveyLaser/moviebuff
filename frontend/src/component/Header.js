import React from 'react';
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <img src="favicon.ico" alt=""></img>
        <p className="Title">MovieBuff</p>
        <img src="favicon.ico" alt=""></img>
      </header>
    );
  }
}

export default Header;