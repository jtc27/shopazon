import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import { useState } from 'react';

import { getAuth, signOut } from "firebase/auth";

import { ReactNotifications } from 'react-notifications-component'
import Notification from './Notification';

function Header() {

  const [{cart, user}, dispatch] = useStateValue()
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  const auth = getAuth()
  const handleAuth = () => {
    if (user) {
      Notification('Signing Out...', 'Thank you for visiting', 1500)
      toggleModal()

      setTimeout(() => signOut(auth), 1500)

    }
  }

  return (
    <div className='header'>
      <ReactNotifications className='notification'/>
      <Link to='/'>
      <img src="https://i.ibb.co/DD9CJjp/shopazon2.jpg"
      alt='' 
      className='header__logo'
      />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className='header__searchIcon'/>
      </div>

      <div className="header__nav">
        <div className='header__option'>
          <span className='header__optionLineOne'>
          <Link className='link' 
          onClick={toggleModal}
          to={!user && '/login'} 
          style={ user ? 
          {textDecoration: 'none', color: '#f9d75c'} 
          : 
          {textDecoration: 'none'} }  
          >
            {user? user.email: 'Hello Guest'}
          </Link>
          </span>

          <span className='header__optionLineTwo'>
            {user? 
            <Link className='link'
            onClick={toggleModal}
            style={{textDecoration: 'none', color: '#fff'}}
            >
            {'Sign Out'}
            </Link>
            : 
            <Link
            to={'/login'} 
            style={{textDecoration: 'none', color: '#fff'}}
            >
            {'Sign In'}
            </Link>
            }
          </span>

        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>
            Returns
          </span>
          <span className='header__optionLineTwo'>
            & Orders
          </span>
        </div>

        <div className='header__option3'>
          <span className='header__optionLineOne'>
            Your
          </span>
          <span className='header__optionLineTwo'>
            Prime
          </span>
        </div>

        <div className='header__optionCart'>
          <span className='header__cartCounter'>
          <Link className='link__cart' to='/checkout'>
            {cart?.length}
          </Link>
          </span>
        <Link className='link__cart' to='/checkout'>
            <ShoppingCartIcon className='header__cartIcon'/>
        </Link>
        </div>

        {modal && 
        <div className='modal'>
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-body">Would you like to sign out?</div>
          <button className='close-modal' onClick={handleAuth}>Yes</button>
        </div>
        }

      </div>

    </div>
  )
}

export default Header
