// import React from 'react';
import classes from '../Styles/Nav.module.css'
import Account from './Account';
import logo from '../assets/images/logo-bg.png'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className= {classes.brand} >
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account> </Account>
    </nav>
  );
};

export default Navbar;