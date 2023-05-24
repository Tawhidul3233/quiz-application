// import React from 'react';
import Illustration from '../Illustration'
import Form from '../Form'
import classes from '../../Styles/Singup.module.css'
import TextInput from '../TextInput';
import CheckBox from '../CheckBox';
import Button from '../Button';
import singupImg from '../../assets/images/signup.svg'
import { Link } from 'react-router-dom';

const SingUp = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">

        <Illustration img={singupImg} alt='Singup'></Illustration>
        
        <Form className={`${classes.signup}  `}>

          <TextInput type="text" placeholder="Enter name" icon="person" > </TextInput>

          <TextInput type="email" placeholder="Enter email" icon="alternate_email" > </TextInput>

          <TextInput type="password" placeholder="Enter password" icon="lock" > </TextInput>

          <TextInput type="password" placeholder="Confirm password" icon="lock_clock" > </TextInput>

          <CheckBox text="I agree to the Terms & Conditions"> </CheckBox>

          <Button > Submit Now </Button>

          <div className="info">
            Already have an account? 
            <Link to="/Login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </div >
  );
};

export default SingUp;