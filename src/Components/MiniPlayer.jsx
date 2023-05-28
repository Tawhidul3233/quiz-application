// import React from 'react';
import { useRef, useState } from 'react';
import classes from '../Styles/MiniPlayer.module.css'
// import img from '../assets/images/3.jpg'
import ReactPlayer from 'react-player';

const MiniPlayer = ({ title, id }) => {

  const buttonRef = useRef();
  const [player, setPlayer] = useState(false);
  const videoURL = `https://www.youtube.com/watch?v=${id}`

  const toggolPlayer = () => {
    if (!player) {
      setPlayer(true);
      buttonRef.current.classList.remove(classes.floatingBtn)
    } else {
      setPlayer(false)
      buttonRef.current.classList.add(classes.floatingBtn)
    }
  }

  return (
    <div ref={buttonRef} className={`${classes.miniPlayer} ${classes.floatingBtn}`} onClick={toggolPlayer} >
      <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
      <span onClick={toggolPlayer} className={`material-icons-outlined ${classes.close}`}> close </span>
      <ReactPlayer  url={videoURL} width='300px' height='150px' playing={player} controls  ></ReactPlayer>
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;