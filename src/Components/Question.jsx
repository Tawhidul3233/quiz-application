// import React from 'react';
import classes from '../Styles/Question.module.css'
import Answers from './Answers';

const Question = ({ answers }) => {
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        answers.map((question, i) => (
          <div key={i} className={classes.question}>
            <div className={classes.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              {question?.title}
            </div>
            <Answers input={false} options={question?.options}> </Answers>
          </div>
        ))
      }
    </div>

  );
};

export default Question;