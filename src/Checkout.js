import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import SubtotalBelow from './SubtotalBelow'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

import { ReactNotifications } from 'react-notifications-component'
import Notification from './Notification';

function Checkout() {

  const [{cart, user, recentDelete}, dispatch] = useStateValue()

  let result = cart.filter(function({id}) {
    return !this.has(id) && this.add(id);
  }, new Set)


  return (
    <div className='checkout'>
      <ReactNotifications/>
     
      <div className="checkout__left">
        <img className='checkout__ad'
        src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_DarkBG_1_NotApproved._TTW_.jpg" 
        alt="" />
        <div>
          <h2 className='checkout__title'>Your shopping cart</h2>

          {recentDelete ? Notification(
            'You removed', 
            recentDelete.slice(0,53) + '...', 
            2500, 
            'info', 
            'top-left') : ''}

          {cart[0] ? '' 
          :
          <div className='empty__cart'><h3>There are not any items in the cart</h3>
          <br/>
            <Link to='/' className='link below__home'>
              <Button className='below__home__btn'>
              Continue Shopping
              </Button>
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

           {console.log(result)}
          


          {cart[0] && <SubtotalBelow/>}

        </div>
      </div>

      
      <div className="checkout__right">
        <h2><Subtotal/></h2>
      </div>

    </div>
  )
}

export default Checkout