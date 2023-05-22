// import React from 'react';

import Navbar from "./Navbar";
import classes from '../Styles/Layout.module.css'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar> </Navbar>
      <main className={classes.main}>
        <div className={classes.container}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;