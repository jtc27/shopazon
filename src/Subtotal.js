import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function Subtotal() {

  const [{cart}, dispatch] = useStateValue()

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

        {
          cart[0]?
          (<Button className='checkout__link__btn'>
            <Link to='/finalcheckout' className='link'>
              Proceed to Checkout
            </Link>
            </Button>)
          :
          (<Button className='home__link__btn'>
            <Link to='/' className='link'>
              Continue Shopping
            </Link>
            </Button>)
        }


    </div>
  )
}

export default Subtotal