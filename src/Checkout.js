import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {

  const [{cart}, dispatch] = useStateValue()

  return (
    <div className='checkout'>
     
      <div className="checkout__left">
        <img className='checkout__ad'
        src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_DarkBG_1_NotApproved._TTW_.jpg" 
        alt="" />
        <div>
          <h2 className='checkout__title'>Your shopping cart</h2>

          {cart.map(item => (
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <h2><Subtotal/></h2>
      </div>

    </div>
  )
}

export default Checkout