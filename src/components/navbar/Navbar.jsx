import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

import logoImg from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.svg';
import close from '../../assets/images/close.svg';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {

    setIsOpen(!isOpen);
  };

  const menuImage = isOpen ? close : menu;

  return (
    <nav className='navbar'>
      <div className='navbar__content'>
        <NavLink
          exact
          activeClassName='active'
          to='/amovies'
        >
          <img src={logoImg} className='navbar__logo' alt='Logo a movies' title='logo a movies' />
        </NavLink>
        <ul className='navbar__links'>
          <li className='navbar__links--item'>
            <NavLink
              exact
              activeClassName='active'
              to='/amovies'
            >
              <span>

                Home
              </span>
            </NavLink>
          </li>

          <li className='navbar__links--item'>
            <NavLink
              activeClassName='active'
              to='/categories'
            >
              <span>
                Categories
              </span>
            </NavLink>
          </li>
          <li className='navbar__links--item'>
            <NavLink
              activeClassName='active'
              to='/favorites'
            >
              <span>
                My favorites
              </span>
            </NavLink>
          </li>
          <li className='navbar__links--item'>
            <a href='#'>
              <span>
                Sign in
              </span>
            </a>
          </li>

        </ul>
        { isOpen && (
          <ul className='navbar__links2'>
            <li className='navbar__links--item'>
              <NavLink
                exact
                activeClassName='active'
                to='/amovies'
              >
                <span>

                  Home
                </span>
              </NavLink>
            </li>

            <li className='navbar__links--item'>
              <NavLink
                activeClassName='active'
                to='/categories'
              >
                <span>
                  Categories
                </span>
              </NavLink>
            </li>
            <li className='navbar__links--item'>
              <NavLink
                activeClassName='active'
                to='/favorites'
              >
                <span>
                  My favorites
                </span>
              </NavLink>
            </li>
            <li className='navbar__links--item'>
              <a href='#'>
                <span>
                  Sign in
                </span>
              </a>
            </li>

          </ul>
        )}
        <div className='navbar__menu-button'>
          <button type='button' onClick={toggleMenu}>
            <img src={isOpen ? close : menu} alt='menu icon' title={isOpen ? 'close' : 'menu'} />
          </button>

        </div>
      </div>

    </nav>
  );
}
