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
          
          { //THREE link options for button
            user && cart[0]? //1: user logged in with items can checkout
            (
              <Link to='/finalcheckout' className='link sub__totalCheckout'>
                <Button className='checkout__button'>
                Proceed to Checkout
                </Button>
              </Link>
            )
            :
            !user && cart[0]? //2: guest with items is sent to login page
            (
              <Link to='/login' className='link sub__totalCheckout'>
                <Button className='checkout__button'>
                Login to Checkout
                </Button>
              </Link>
            )
            :
            (   //3: empty cart redirects to home page
              <Link to='/' className='link sub__totalCheckout'>
                <Button className='home__btn'>
                Continue Shopping
                </Button>
              </Link>
            )
          }


    </div>
  )
}

export default Subtotal