// import React from 'react';

import { useEffect, useState } from "react";

const useFetch = ({ url, method, headers }) => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)

  useEffect(() => {
    async function fetchResponse() {
      try {
        setLoading(true)
        setError('')
        const respones = await fetch(url, {
          method: method || 'GET',
          headers: headers
        });
        // console.log(respones)
        const data = await respones.json();
        setLoading(false)
        setResult(data)
        console.log(data)

      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(error)
      }
    }

    fetchResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    loading,
    error,
    result
  }
};

export default useFetch;