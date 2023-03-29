import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import SubtotalBelow from './SubtotalBelow'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'

import { ReactNotifications } from 'react-notifications-component'
import Notification from './Notification';

function Checkout() {

  const [{cart, recentDelete}, dispatch] = useStateValue()

  return (
    <div className='checkout'>
      <ReactNotifications/>
     
      <div className="checkout__left">
        <img className='checkout__ad'
        src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_DarkBG_1_NotApproved._TTW_.jpg" 
        alt="" />
        <div>
          <h2 className='checkout__title'>Your shopping cart</h2>

          {recentDelete ? Notification('You removed', recentDelete, 1500, 'info', 'top-center') : ''}

          {cart[0] ? '' 
          :
          <div className='empty__cart'><h3>There are no items in the cart</h3>
            <Link to='/'>
            <button className='home__button'>Continue Shopping</button> 
            </Link>
          </div>
          }

          {cart.map(item => (
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}

          <SubtotalBelow/>

        </div>
      </div>

      <div className="checkout__right">
        <h2><Subtotal/></h2>
      </div>

    </div>
  )
}

export default Checkout