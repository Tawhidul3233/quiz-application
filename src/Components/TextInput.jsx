// import React from 'react';
import classes from '../Styles/TextInput.module.css'

// eslint-disable-next-line react/prop-types
const TextInput = ({icon, type, placeholder}) => {
  return (
    <div className={classes.textInput}>
      <input type={type} placeholder={placeholder} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInput;