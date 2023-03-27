import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import { Button } from '@mui/material' 

function CheckoutProduct({id, image, title, price, rating}) {

  const [{cart}, dispatch] = useStateValue()

  const removeFromCart = () => {
    //dispatch the item into data layer
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    })
  }

  return (
    <div className='checkoutProduct'>
      <img 
      className='checkoutProduct__image'
      src={image} alt="" />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title '>{title}</p>
        <p className='checkoutProduct__price '>
          <small>$</small>
         <strong>{price}</strong> 
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
          .fill()
          .map((_, i) => (<p>🌟</p>))
          }
        </div>
        <Button onClick={removeFromCart}>Remove from Cart</Button>
      </div>
    </div>
  )
}

export default CheckoutProduct