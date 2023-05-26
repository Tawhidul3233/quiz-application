// import React from 'react';
import classes from '../Styles/ProgressBar.module.css'
import classes2 from '../Styles/Button.module.css'
import { Link } from 'react-router-dom';

const ProgressBar = ({ nextQuestion, prevQuestion, progress }) => {
  return (
    <div className={classes.progressBar}>
      <div onClick={prevQuestion} className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}> {progress}% Cimplete! </div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <button onClick={nextQuestion} className={` ${classes2.button} ${classes2.next}`}>
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </button>

    </div>
  );
};

export default ProgressBar;