// import React from 'react';

import Illustration from "../Illustration";
import loginImg from "../../assets/images/login.svg"
import Button from "../Button";
import Form from "../Form";
import TextInput from "../TextInput";
import classes from '../../Styles/Login.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signin } = useAuth();
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      setError('');
      setLoading(true);
      await signin(email, password);
      setLoading(false)
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false)
    }
  }
  return (
    <div>
      <h1>Login to your account</h1>

      <div className="column">

        <Illustration img={loginImg} alt='Login'> </Illustration>

        <Form onSubmit={handelSubmit} className={`${classes.login}  `} >

          <TextInput type="email" placeholder="Enter email" icon="alternate_email" value={email} onChange={e => setEmail(e.target.value)} />

          <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={e => setPassword(e.target.value)} />

          {error && <p className="error"> {error.message} </p>}

          <Button disabled={loading} type='submit'> Submit Now </Button>

          <div className="info">
            Dont have an account?
            <Link to="/Singup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;