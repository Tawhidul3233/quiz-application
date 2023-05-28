// import React from 'react';
import classes from '../Styles/Summary.module.css'
import img from '../assets/images/success.png'

const Summary = ({ userScore, qna }) => {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>

        <p className={classes.score}>
          Your score is <br />
          {userScore} out of {qna.length * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={img} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;