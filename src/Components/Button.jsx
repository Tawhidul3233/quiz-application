// import React from 'react';
import classes from '../Styles/Button.module.css'

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <div className={classes.button}>
      <span>{children}</span>
    </div>
  );
};

export default Button;