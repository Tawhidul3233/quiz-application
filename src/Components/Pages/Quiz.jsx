// import React from 'react';

import { Navigate, useNavigate, useParams } from "react-router-dom";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import useQuestions from "../../Hooks/useQuestions";
import { useEffect, useReducer, useState } from "react";
import _ from 'lodash'
import { useAuth } from "../../Context/AuthContext";
import { getDatabase, ref, set } from "firebase/database";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      action.value.forEach(q => {
        q.options.forEach(option => {
          option.checked = false;
        })
      })
      return action.value;
    case 'answer':
      // eslint-disable-next-line no-case-declarations
      const questions = _.cloneDeep(state);
      questions[action.questionIndex].options[action.optionIndex].checked = action.value;
      // console.log(questions)
      return questions;

    default:
      return state;
  }
}

const Quiz = () => {
  const { videoID } = useParams();
  const { loading, error, questions } = useQuestions(videoID);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const { currentUser } = useAuth();
  const navigate = useNavigate();


  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'questions',
      value: questions
    })
  }, [questions])
  // console.log(qna)

  const handelAnswerChange = (e, index) => {
    dispatch({
      type: 'answer',
      questionIndex: currentQuestionIndex,
      optionIndex: index,
      value: e.target.checked
    })
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(preQuestion => preQuestion + 1)
    }
  }
  const prevQuestion = () => {
    if (currentQuestionIndex > 0 && currentQuestionIndex <= questions.length) {
      setCurrentQuestionIndex(preQuestion => preQuestion - 1)
    }
  }

  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;
  // console.log(questions)
  // console.log(currentUser);

  const submit = async () => {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`)

    await set(resultRef, {
      [videoID]: qna
    })


    navigate(`/Result/${videoID}`, {
      state: {
        qna
      }
    });

  }

  return (
    <>
      {loading && <div> Loading ......... </div>}
      {!loading && error && <div>  There was an error </div>}
      {!loading && !error && questions.length == 0 && <div> No Question found! </div>}
      {
        !loading && !error && questions.length > 0 && <>
          <h1> {qna[currentQuestionIndex]?.title} </h1>
          <h4>Question can have multiple answers</h4>
          <Answers input={true} options={qna[currentQuestionIndex]?.options} handelChange={handelAnswerChange} ></Answers>
          <ProgressBar submit={submit} nextQuestion={nextQuestion} prevQuestion={prevQuestion} progress={progress} > </ProgressBar>
          <MiniPlayer></MiniPlayer>
        </>
      }

    </>
  );
};

export default Quiz;