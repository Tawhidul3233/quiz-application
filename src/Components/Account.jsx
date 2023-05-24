// import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../Styles/Account.module.css'
import { useAuth } from '../Context/AuthContext';

const Account = () => {
  const { currentUser, logout } = useAuth()
  return (
    <div className={classes.account}>
      {
        currentUser ? <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span> {currentUser?.displayName} </span>
          <span onClick={logout} className="material-icons-outlined" title="Logout"> logout </span>
        </> :
          <>
            <Link to="/Singup">Signup</Link>
            <Link to="/Login">Login</Link>
          </>
      }

    </div>
  );
};

export default Account;