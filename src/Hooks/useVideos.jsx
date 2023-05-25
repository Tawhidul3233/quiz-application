// import React from 'react';

import { useEffect, useState } from "react";
import { getDatabase, query, orderByKey, ref, get, startAt, limitToFirst } from 'firebase/database'

const useVideosList = (page) => {
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')
  const [videos, setVideos] = useState([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const fetchVideos = async () => {
      const db = getDatabase();
      const videosRef = ref(db, 'videos');
      const videoQuery = query(videosRef, orderByKey(), startAt('' + page), limitToFirst(5));

      try {
        setLoading(true)
        setError('')
        const snapshot = await get(videoQuery);
        setLoading(false)
        if (snapshot.exists()) {
          setVideos((preVideos) => {
            return [...preVideos, ...Object.values(snapshot.val())]
          })
        } else {
          setHasMore(false)
        }
      } catch (error) {
        console.log(error)
        setError(error)
        setLoading(false)
      }

    }
    fetchVideos();
  }, [page])

  return {
    loading,
    error,
    videos,
    hasMore
  }
};

export default useVideosList;