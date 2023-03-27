import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useState } from 'react'

import './firebase'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('user@email.com')
  const [password, setPassword] = useState('shopazon')

  const signIn = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('signed in')
        navigate('/')
        })
        .catch(error => alert(error.message));
  }

  const register = (e) => {
    e.preventDefault()

    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        navigate('/')
      })
      .catch(error => alert(error.message))
  }

  return (
    
    <div className='login'>
      <Link to='/'>
      <img src="https://i.ibb.co/3F1ZnFk/shopazon-clear.png"
      className='login__logo'
       />
       </Link>

       <div className="login__container">
        <h2>Sign-In</h2>

        <form action="">
          <h5>E-mail</h5>
            <input type="text" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            />
          <h5>Password</h5>
            <input type="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
        </form>

        <Button className='login__signInButton'
        onClick={signIn}
        type='submit'
        >
        Continue
        </Button>

        <p>You can sign in with <b>user@email.com</b> and the password <b>shopazon</b>.  It has been filled in already.  Or you can create a new account by clicking the button below</p>

      
        <Button className='login__registerButton'
        >
          <Link
          to={'/register'} 
          style={{textDecoration: 'none', color: '#000'}} 
          >
          Create your Shopazon account
        </Link>
        </Button>

       </div>

    </div>
  )
}

export default Login