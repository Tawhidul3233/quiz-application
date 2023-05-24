// import React from 'react';
import classes from '../Styles/Button.module.css'

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <button className={classes.button}>
      <span>{children}</span>
    </button>
  );
};

export default Button;