import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

import logoImg from '../../assets/images/logo.png';

export default function Navbar() {

  return (
    <nav className='navbar'>
      <div className='navbar__content'>
        <NavLink
          exact
          activeClassName='active'
          to='/'
        >
          <img src={logoImg} alt='Logo a movies' title='logo a movies' />
        </NavLink>
        <ul className='navbar__links'>
          <li className='navbar__links--item'>
            <NavLink
              exact
              activeClassName='active'
              to='/'
            >
              Home
            </NavLink>
          </li>

          <li className='navbar__links--item'>
            <NavLink
              activeClassName='active'
              to='/categories'
            >
              Categories
            </NavLink>
          </li>
          <li className='navbar__links--item'>
            <NavLink
              activeClassName='active'
              to='/favorites'
            >
              My favorites
            </NavLink>
          </li>
          <li className='navbar__links--item'>
            <a href='#'>
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
