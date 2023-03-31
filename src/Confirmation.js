import React from 'react'
import './Confirmation.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link, useNavigate } from 'react-router-dom'

import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { Button } from '@mui/material';

import './firebase'
 


function Confirmation() {

  const navigate = useNavigate()
  const [{cart, user}, dispatch] = useStateValue()

  const subtotal = getCartTotal(cart)
  const tax = subtotal * .07
  const fee = subtotal * .0027
  const total = subtotal + tax + fee

  const emptyCart = () => {
    cart.length = 0
  }

  return (
  <div className="confirmation">

    {/* top__row */}
    <div className="top__row">
        <Link to='/'>
        <img src="https://i.ibb.co/3F1ZnFk/shopazon-clear.png"
        id='login__logo'
        />
        </Link>

        <h2>Order confirmed</h2>
        <LocalShippingIcon className='truck' fontSize='large'/>
      </div>
    <div className="top__line"></div>
    {/* top__row end */}

    <h3 className='thank__you'>Thank you!</h3>
    <div className="order__info">

      <div className='order__items__top'>
      <h5>Your order is confirmed</h5>
      <h5>Order #18940523</h5>
      </div>
      <p className='small__text'>Confirmation has been sent to <Link 
      to='/'
      style={{textDecoration: 'none', color: 'brown'}}
      >{user.email}
      </Link></p>

      <hr></hr>
      <h4 className='order__summary'>Order Summary</h4>
      <div className='order__items small__text'>
      <p>Items ({cart.length}):</p>
      <p>
        <CurrencyFormat
          renderText={(value) =>(<>{value}</>)}
          decimalScale={2}
          value={subtotal}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        </p>
      </div>
      <div className='order__items small__text'>
      <p>Shipping & handling</p>
      <p>$0.00</p>
      </div>
      <div className='break'>__________________________</div>
      <div className='order__items small__text'>
      <p>Total before tax:</p>
      <p><CurrencyFormat
          renderText={(value) =>(<>{value}</>)}
          decimalScale={2}
          value={subtotal}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        /></p>
      </div>
      <div className='order__items small__text'>
      <p>Estimated tax to be collected:</p>
      <p>
        <CurrencyFormat
          renderText={(value) =>(<>{value}</>)}
          decimalScale={2}
          value={tax}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </p>
      </div>
      <div className='order__items small__text'>
      <p>Estimated Regulatory Fees:</p>
      <p>
        <CurrencyFormat
          renderText={(value) =>(<>{value}</>)}
          decimalScale={2}
          value={fee}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </p>
      </div>
      <hr/>
      <div className='order__items total'>
      <h4>Order total:</h4>
      <h4>
        <CurrencyFormat
          renderText={(value) =>(<>{value}</>)}
          decimalScale={2}
          value={total}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </h4>
      </div>

      <div className="center">
      <Link to='/' className='link below__home'>
        <Button className='below__home__btn'>
        Back to Home Page
        </Button>
      </Link>
      </div>

    </div> {/* order__info div End */}

    {emptyCart()} {/* After confirmation, empties the shopping cart */}
  </div> // confirmation div End
    )
}

export default Confirmation