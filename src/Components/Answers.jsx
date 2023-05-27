// import React from 'react';

import CheckBox from "./CheckBox";
import classes from '../Styles/Answers.module.css'

const Answers = ({ options = [], handelChange }) => {
  return (
    <div className={classes.answers}>
      {
        options.map((option, index) => (
          <CheckBox key={index} className={classes.answer} text={option?.title} value={index} checked={option?.checked}
            onChange={(e) => handelChange(e, index)}
          />
        ))
      }
    </div>
  );
};

export default Answers;