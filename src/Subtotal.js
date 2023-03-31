import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function Subtotal() {

  const [{cart, user}, dispatch] = useStateValue()

  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value) =>(
        <>
          <p>
            Subtotal ({cart.length} items):
            <strong className='itemTotal'>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={getCartTotal(cart)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />

        <div className="checkout__link__btn">
          <Button>
          { //THREE link options for button
            user && cart[0]? //1: user logged in with items can checkout
            (
              <Link to='/finalcheckout' className='link'>Proceed to Checkout</Link>
            )
            :
            !user && cart[0]? //2: guest with items is sent to login page
            (
              <Link to='/login' className='link'>Login to Checkout</Link>
            )
            :
            (   //3: empty cart redirects to home page
              <Link to='/' className='link'>Continue Shopping</Link>
            )
          }
          </Button>
        </div>


    </div>
  )
}

export default Subtotal