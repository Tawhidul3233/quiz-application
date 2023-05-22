// import React from 'react';
import classes from '../Styles/ProgressBar.module.css'
import classes2 from '../Styles/Button.module.css'

const ProgressBar = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: '20%' }}></div>
        </div>
      </div>
      <a href="result.html">
        <button className={` ${classes2.button} ${classes2.next}`}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </button>
      </a>
    </div>
  );
};

export default ProgressBar;