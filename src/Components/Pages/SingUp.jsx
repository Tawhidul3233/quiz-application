// import React from 'react';
import Illustration from '../Illustration'
import Form from '../Form'
import classes from '../../Styles/Singup.module.css'
import TextInput from '../TextInput';
import CheckBox from '../CheckBox';
import Button from '../Button';
import singupImg from '../../assets/images/signup.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';

const SingUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const { signup } = useAuth();
  const navigate = useNavigate()

  const handelSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      return setError('Password not matched')
    }

    try {
      setError('')
      setLoading(true)
      await signup(email, password, username)
      navigate('/')
    } catch (error) {
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">

        <Illustration img={singupImg} alt='Singup'></Illustration>

        <Form onSubmit={handelSubmit} className={`${classes.signup}  `}>

          <TextInput required type="text" placeholder="Enter name" icon="person" value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextInput required type="email" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <TextInput required type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} />

          <TextInput required type="password" placeholder="Confirm password" icon="lock_clock" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          <CheckBox required text='I agree to the Terms & Conditions' checked={agree} onChange={(e) => setAgree(e.target.checked)} />

          {error && <p className='error'> {error.message} </p>}

          <Button type='submit' disabled={loading}> Submit Now </Button>

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