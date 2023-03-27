import React from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useState } from 'react'

import './firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    
    <div className='register'>
      <Link to='/'>
      <img src="https://i.ibb.co/3F1ZnFk/shopazon-clear.png"
      className='login__logo'
       />
       </Link>

       <div className="register__container">
        <h2>Create a new account</h2>

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

        <Button className='register__registerButton'
        onClick={register}
        >
        Create your Shopazon account</Button>

       </div>

    </div>
  )
}

export default Register