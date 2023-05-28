// import React from 'react';
import classes from '../Styles/ProgressBar.module.css'
import classes2 from '../Styles/Button.module.css'
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

const ProgressBar = ({ nextQuestion, submit, prevQuestion, progress }) => {

  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  const toggleTooltip = () => {
    if (!tooltip) {
      setTooltip(true)
      tooltipRef.current.style.display = 'block';
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
    } else {
      setTooltip(false)
      tooltipRef.current.style.display = 'none';
    }
  }

  return (
    <div className={classes.progressBar}>
      <div onClick={prevQuestion} className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div ref={tooltipRef} className={classes.tooltip}> {progress}% Complete! </div>
        <div className={classes.rangeBody}>
          <div onMouseOver={toggleTooltip} onMouseOut={toggleTooltip} className={classes.progress} style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <button onClick={progress == 100 ? submit : nextQuestion} className={` ${classes2.button} ${classes2.next}`}>
        <span> {progress == 100 ? 'Submit Quiz' : 'Next Question'} </span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </button>

    </div>
  );
};

export default ProgressBar;