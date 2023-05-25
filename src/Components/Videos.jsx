// import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../Styles/Videos.module.css'
import Video from './Video';
import useVideosList from '../Hooks/useVideos';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Videos = () => {
  const [page, setPage] = useState(0)
  const { loading, error, videos, hasMore } = useVideosList(page);

  console.log(videos)
  return (
    <div >
      {loading && <div> Loading....... 🎢 </div>}
      {!loading && videos.length == 0 && <div> Videos not found 💀 </div>}
      {error && <div> There was an error 😒 </div>}
      {
        videos.length > 0 && (
          <InfiniteScroll
            className={classes.videos}
            dataLength={videos.length}
            hasMore={hasMore}
            next={() => setPage(page + 8)}

          >
            {
              videos.map((video, index) =>
                video.noq > 0 ? <Link to='/Quiz' key={index}>
                  <Video title={video.title} id={video.youtubeID} noq={video.noq} />
                </Link> :
                  <Video key={index} title={video.title} id={video.youtubeID} noq={video.noq} />
              )
            }
          </InfiniteScroll>
        )
      }

    </div>
  );
};

export default Videos;