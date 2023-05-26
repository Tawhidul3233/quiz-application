// import React from 'react';

import { useParams } from "react-router-dom";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import useQuestions from "../../Hooks/useQuestions";
import { useState } from "react";


const Quiz = () => {
  const { videoID } = useParams();
  const { loading, error, questions } = useQuestions(videoID);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)



  const nextQuestion = () => {
    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(preQuestion => preQuestion + 1)
    }
  }
  const prevQuestion = () => {
    if (currentQuestionIndex > 0 && currentQuestionIndex <= questions.length - 1) {
      setCurrentQuestionIndex(preQuestion => preQuestion - 1)
    }
  }

  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length ) * 100 : 0;
  // console.log(questions)

  return (
    <>
      {loading && <div> Loading ......... </div>}
      {!loading && error && <div>  There was an error </div>}
      {!loading && !error && questions.length == 0 && <div> No Question found! </div>}
      {
        !loading && !error && questions.length > 0 && <>
          <h1> {questions[currentQuestionIndex]?.title} </h1>
          <h4>Question can have multiple answers</h4>
          <Answers></Answers>
          <ProgressBar nextQuestion={nextQuestion} prevQuestion={prevQuestion} progress={progress} > </ProgressBar>
          <MiniPlayer></MiniPlayer>
        </>
      }

    </>
  );
};

export default Quiz;