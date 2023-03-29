import React from 'react'
import './FinalCheckout.css'
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

import { useStateValue } from './StateProvider';

import './firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function FinalCheckout() {

  const navigate = useNavigate()
  const [{cart, user}, dispatch] = useStateValue()

  return (
    
    <div className='login'>
      <div className="top__row">
        <Link to='/'>
        <img src="https://i.ibb.co/3F1ZnFk/shopazon-clear.png"
        id='login__logo'
        />
        </Link>

        <h2>Checkout ({cart.length} items)</h2>
        <LockIcon/>
      </div>
      <div className="top__line"> </div>
      

       <div className="login__container">
        <h2>Sign-In</h2>

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

export default FinalCheckout