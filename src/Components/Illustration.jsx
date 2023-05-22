// import React from 'react';
import classes from '../Styles/Illustration.module.css'

// eslint-disable-next-line react/prop-types
const Illustration = ({img, alt}) => {
  return (
    <div className={classes.illustration}>
      <img src={img} alt={alt}/>
    </div>
  );
};

export default Illustration;