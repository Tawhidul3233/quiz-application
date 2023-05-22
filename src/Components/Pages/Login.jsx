// import React from 'react';

import Illustration from "../Illustration";
import loginImg from "../../assets/images/login.svg"
import Button from "../Button";
import Form from "../Form";
import TextInput from "../TextInput";
import classes from '../../Styles/Login.module.css'

const Login = () => {
  return (
    <div>
      <h1>Login to your account</h1>

      <div className="column">

        <Illustration img={loginImg} alt='Login'> </Illustration>

        <Form className={`${classes.login}  `} >

          <TextInput type="email" placeholder="Enter email" icon="alternate_email" > </TextInput>

          <TextInput type="password" placeholder="Enter password" icon="lock" > </TextInput>
          <Button> Submit Now </Button>
          <div className="info">
            Dont have an account?
            <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;