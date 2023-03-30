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

      <Link to='/finalcheckout'>
        <Button className='checkout__link__btn'>Proceed to Checkout</Button>
      </Link>
    </div>
  )
}

export default Subtotal