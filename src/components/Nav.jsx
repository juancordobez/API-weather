// React
import React from 'react';

// Router Dom
import { Link } from 'react-router-dom';

// Components
import SearchBar from './SearchBar.jsx';
import { About } from './About.jsx';

// Styles
import Logo from '../img/logoHenry.png';




function Nav({onSearch}) {
  return (
    <nav className="row wrap">

      <Link to='/'>
        <div className="row flex">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="logo de soy henry" />
        </div>
      </Link>
      <Link to='/'>
          <span className="flex">Clima App</span>

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
