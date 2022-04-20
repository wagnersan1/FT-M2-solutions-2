import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <img src={Logo} alt="img not found" />
      <SearchBar onSearch = {onSearch}/>
    </div>
  );
};

export default Nav;
