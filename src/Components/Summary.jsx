// import React from 'react';
import classes from '../Styles/Summary.module.css'
import img from '../assets/images/success.png'

const Summary = () => {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>

        <p className={classes.score}>
          Your score is <br />
          5 out of 10
        </p>
      </div>

      <div className={classes.badge}>
        <img src={img} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;