// React
import React from 'react';

// Router Dom
import { Link } from 'react-router-dom';

// Components
import SearchBar from './SearchBar.jsx';
import { About } from './About.jsx';

// Styles
import Logo from '../img/logoHenry.png';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Clima App
        </span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />

      <Link to='/about'>
        <About />
      </Link>

    </nav>
  );
};

export default Nav;
