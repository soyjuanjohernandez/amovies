import React from 'react';
import './navbar.scss';
import logoImg from '../../assets/images/logo.png';

export default function Navbar() {

  return (
    <nav className='navbar'>
      <div className='navbar__content'>
        <img src={logoImg} alt='Logo a movies' title='logo a movies' />
        <ul className='navbar__links'>
          <li className='navbar__links--item'><a href='#' className='active'> Home</a></li>
          <li className='navbar__links--item'><a href='#'> Categories</a></li>
          <li className='navbar__links--item'><a href='#'> My favorites</a></li>
          <li className='navbar__links--item'><a href='#'> Sign in</a></li>
        </ul>
      </div>
    </nav>
  );
}
