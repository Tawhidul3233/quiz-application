// import React from 'react';

import CheckBox from "./CheckBox";
import classes from '../Styles/Answers.module.css'
import { Fragment } from "react";

const Answers = ({ options = [], handelChange, input }) => {
  return (
    <div className={classes.answers}>
      {
        options.map((option, index) =>
          <Fragment key={index}>
            {
              input ?
                <CheckBox key={index} className={classes.answer} text={option?.title} value={index} checked={option?.checked}
                  onChange={(e) => handelChange(e, index)}
                />
                :
                <CheckBox key={index} className={`${classes.answer}
                ${option.correct ? classes.correct : !option.correct && option.checked && classes.wrong}
                ` } text={option?.title} defaultChecked={option?.checked} disabled

                />

            }
          </Fragment>

        )
      }
    </div>
  );
};

export default Answers;