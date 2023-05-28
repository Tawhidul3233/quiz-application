// import React from 'react';

import { useEffect, useState } from "react";
import { getDatabase, query, orderByKey, ref, get } from 'firebase/database'

const useAnswers = (videoID) => {
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const fetchAnswers = async () => {
      const db = getDatabase();
      const answerRef = ref(db, 'answers/' + videoID + '/questions');
      const answerQuery = query(answerRef, orderByKey());

      try {
        setLoading(true)
        setError('')
        const snapshot = await get(answerQuery);
        setLoading(false)
        if (snapshot.exists()) {
          setAnswers((preAnswers) => {
            return [...preAnswers, ...Object.values(snapshot.val())]
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
    fetchAnswers();
  }, [videoID])

  return {
    loading,
    error,
    answers
  }
};

export default useAnswers;