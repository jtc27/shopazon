import React from 'react'
 
import { useStateValue } from './StateProvider'
import './FinalCheckoutProduct.css'
import DeleteIcon from '@mui/icons-material/Delete';

function FinalCheckoutProduct({id, image, title, price, rating}) {

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
    <div className='finalCheckoutProduct'>
      <DeleteIcon className='deleteIcon' onClick={removeFromCart}/>
      <img 
      className='finalCheckoutProduct__image'
      src={image} alt=""/>

      <div className='checkoutProduct__info'>
        <p className='finalCheckoutProduct__title'>{title} </p>
        <p className='finalCheckoutProduct__price'><b>${price}</b></p>
      </div>
    </div>
  )
}

export default FinalCheckoutProduct