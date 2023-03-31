import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useStateValue } from './StateProvider'

import './firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { ReactNotifications} from 'react-notifications-component'
import Notification from './Notification'

function Login() {

  const navigate = useNavigate()

  const [{cart}, dispatch] = useStateValue()
  const [email, setEmail] = useState('user@email.com')
  const [password, setPassword] = useState('shopazon')

  const signIn = (e) => {
    e.preventDefault();

    Notification(
      'Signing in...', 
      'Welcome to Shopazon',
      1900,
      'success', 
      'top-right')

    const auth = getAuth();

    setTimeout(() => signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log('signed in')
      cart[0] ? navigate('/checkout') : navigate('/')
      //if you have cart items during login, you will go to checkout page.  Otherwise it will send you home
      })
      .catch(error => alert(error.message))
      , 1500)
  }

  return (
    
    <div className='login'>
      <ReactNotifications/>
      <Link to='/'>
      <img src="https://i.ibb.co/3F1ZnFk/shopazon-clear.png"
      id='login__logo'
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

      
        <Link
          to={'/register'} 
          style={{textDecoration: 'none', color: '#000'}} 
          className='login__link'
          >
        <Button className='login__registerButton'
        >
          Create your Shopazon account
        </Button>
        </Link>

       </div>

    </div>
  )
}

export default Login