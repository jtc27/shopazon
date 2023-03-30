import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { Button } from '@mui/material'

function Product({id, title, image, price, rating}) {

  const [{cart}, dispatch] = useStateValue()

  const addToCart = () => {
    //dispatch the item into data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
    console.log('cart ' + cart[0].title)
  }

  return (
    <div className='product'>

      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((v, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <Button onClick={addToCart}>Add to Cart</Button>
      
    </div>
  )
}

export default Product