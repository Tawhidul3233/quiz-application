// import React from 'react';

import { useLocation, useParams } from "react-router-dom";
import Analysis from "../Analysis";
import Summary from "../Summary";
import useAnswers from "../../Hooks/useAnswer";
import _ from 'lodash'

const Result = () => {

  const { videoID } = useParams();
  const { loading, error, answers } = useAnswers(videoID);
  // console.log(answers)

  const location = useLocation();
  const { qna } = location.state;
  // console.log(qna)

  const calculate = () => {

    let score = 0;

    answers.forEach((question, index1) => {

      let correctIndex = [],
        checkedIndex = [];

      question?.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndex.push(index2);
        }
        if (qna[index1]?.options[index2]?.checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndex, checkedIndex)) {
        score = score + 5;
      }

    });

    return score;
  }

  // const calculate2 = () => {

  //   let score2 = 0;

  //   answers.forEach((question, i) => {

  //     let correctIn = [],
  //       checkedIn = [];

  //     question.options.forEach((option, ind) => {

  //       if (option.correct) {
  //         correctIn.push(ind)
  //       }
  //       if (qna[i].options[ind].checked) {
  //         checkedIn.push(ind)
  //         option.checked = true;
  //       }
  //     })
  //     if (_.isEqual(correctIn, checkedIn)) {
  //       score2 = score2 + 5;
  //     }
  //   })
  //   return score2;
  // }

  const userScore = calculate();
  // console.log(answers)

  return (
    <div>
      {loading && <div> Loading........ </div>}
      {!loading && error && <div> There was an error occerd </div>}
      {
        answers && answers.length > 0 && <>
          <Summary userScore={userScore} qna={qna} ></Summary>
          <Analysis answers={answers}> </Analysis>
        </>
      }

    </div>
  );
};

export default Result;