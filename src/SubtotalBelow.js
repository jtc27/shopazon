import React from 'react'
import './SubtotalBelow.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function SubtotalBelow() {

  const [{cart, user}, dispatch] = useStateValue()

  return (
    <div className='subtotal__below'>
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

      <div className='below__buttons'>
        {
          user && cart[0] ?  //logged in with items
          (
            <Link to='/finalcheckout' className='link below__subtotal'>
              <Button className='below__btn'>
              Proceed to Checkout
              </Button>
            </Link>
          )
          :
          (  //guest with items is sent to login page
            <Link to='/login' className='link below__subtotal'>
              <Button className='below__btn'>
              Login to Checkout
              </Button>
            </Link>
          )
        }

            <Link to='/' className='link below__home'>
              <Button className='below__home__btn'>
              Continue Shopping
              </Button>
            </Link>
        </div>

    </div>
  )
}

export default SubtotalBelow