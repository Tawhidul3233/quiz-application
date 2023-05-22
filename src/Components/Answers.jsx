// import React from 'react';

import CheckBox from "./CheckBox";
import classes from '../Styles/Answers.module.css'

const Answers = () => {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text='text answer'> </CheckBox>
    </div>
  );
};

export default Answers;