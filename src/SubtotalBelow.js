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
      <div className="below__checkout">
        <Button className='below__checkout__btn'>
        {
          user && cart[0] ?  //logged in with items
          (
            <Link to='/finalcheckout' className='link'>
              Proceed to Checkout
            </Link>
          )
          :
          (  //guest with items is sent to login page
            <Link to='/login' className='link'>
              Login to Checkout
            </Link>
          )
        }
        </Button>
      </div>


        <div className="below__home">
          <Button className='below__home__btn'>
          <Link to='/' className='link'>
            Continue Shopping
          </Link>
          </Button>
        </div>
      </div>

    </div>
  )
}

export default SubtotalBelow