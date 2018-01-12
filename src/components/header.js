import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const refreshPage = () => window.location.reload()

  return (
    <div className="header">

      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <div className="logo">
          <img className="header-logo" src={require('../assets/images/logo.png')} alt="header logo"/>
        </div>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#" onClick={() => this.refreshPage()}>Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Header;
