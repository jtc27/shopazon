import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import { useState } from 'react';

import { getAuth, signOut } from "firebase/auth";


function Header() {

  const [{cart, user}, dispatch] = useStateValue()
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  const auth = getAuth()
  const handleAuth = () => {
    if (user) {
      signOut(auth)
      toggleModal()
    }
  }

  return (
    <div className='header'>
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
            {'Sign out'}
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
          <Link className='link' to='/checkout' style={{textDecoration: 'none'}}>
            {cart?.length}
          </Link>
          </span>
        <Link className='link' to='/checkout'>
            <ShoppingCartIcon className='header__cartIcon' style={{textDecoration: 'none'}}/>
        </Link>
        </div>

        {modal && 
        <div className='modal'>
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-body">Would you like to sign out?</div>
          <button className='close-modal' onClick={handleAuth}>Yes</button>
        </div>}



      </div>



    </div>
  )
}

export default Header
