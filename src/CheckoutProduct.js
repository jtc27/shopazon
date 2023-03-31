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
      id: id,
      title: title
    })

    console.log(id)
  }

  return (
    <div className='checkoutProduct'>
      <img 
      className='checkoutProduct__image'
      src={image} alt="" />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title '>{title}</p>

        <div className='price__and__remove'>
          <p className='checkoutProduct__price'>${price}
          </p>
          <Button onClick={removeFromCart} className='removeButton'>Remove from Cart</Button>
        </div>
      </div>


    </div>
  )
}

export default CheckoutProduct