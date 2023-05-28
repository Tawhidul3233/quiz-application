// import React from 'react';
import { useRef, useState } from 'react';
import classes from '../Styles/MiniPlayer.module.css'
import img from '../assets/images/3.jpg'

const MiniPlayer = () => {
  
  const buttonRef = useRef();
  const [player, setPlayer] = useState(false);

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
      <img src={img} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;