// import React from 'react';

import { useEffect, useState } from "react";
import { getDatabase, query, orderByKey, ref, get, startAt, limitToFirst } from 'firebase/database'

const useQuestions = (videoID) => {
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const fetchQuestions = async () => {
      const db = getDatabase();
      const quizRef = ref(db, 'quiz/' + videoID + '/questions');
      const quizQuery = query(quizRef, orderByKey());

      try {
        setLoading(true)
        setError('')
        const snapshot = await get(quizQuery);
        setLoading(false)
        if (snapshot.exists()) {
          setQuestions((preQuestions) => {
            return [...preQuestions, ...Object.values(snapshot.val())]
          })
        } else {
          //  
        }
      } catch (error) {
        console.log(error)
        setError(error)
        setLoading(false)
      }

    }
    fetchQuestions();
  }, [videoID])

  return {
    loading,
    error,
    questions
  }
};

export default useQuestions;