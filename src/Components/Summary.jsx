// import React from 'react';
import useFetch from '../Hooks/useFetch';
import classes from '../Styles/Summary.module.css'
import fixImg from '../assets/images/success.png'

const Summary = ({ userScore, qna }) => {

  const showImg = () => {
    if ((userScore / qna * 5) * 100 > 50) {
      return 'failed'
    } else if ((userScore / qna * 5) * 100 < 75) {
      return 'good'
    } else if ((userScore / qna * 5) * 100 < 100) {
      return 'verygood'
    } else {
      return 'excellent'
    }
  }

  const { loading, error, result } = useFetch(`https://api.pexels.com/v1/photos/2014422`, "GET", {
    Authorization: import.meta.env.VITE_API_photoAPI
  });

  console.log(error)
  console.log(result)

  const img = result?.photos[0]?.src?.medium || fixImg;
  // console.log(img)

  return (
    <div className={classes.summary}>
      <div className={classes.point}>

        <p className={classes.score}>
          Your score is <br />
          {userScore} out of {qna.length * 5}
        </p>
      </div>
      {loading && <div className={classes.badge}>
        Loading.......
      </div>}
      {!loading && error && <div> {error?.message || 'There was an error occerd'} </div>}
      {!loading && !error &&
        <div className={classes.badge}>
          <img src={img} alt="Success" />
        </div>}

    </div>
  );
};

export default Summary;