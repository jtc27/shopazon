import React from 'react'
import './FinalCheckout.css'
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom'
import FinalCheckoutProduct from './FinalCheckoutProduct';
import Visa from './images/visa_mini.png'

import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { Button } from '@mui/material';

import { ReactNotifications} from 'react-notifications-component'
import Notification from './Notification'

import './firebase'
 
function FinalCheckout() {

  const navigate = useNavigate()
  const [{cart, user}, dispatch] = useStateValue()

  const subtotal = getCartTotal(cart)
  const tax = subtotal * .07
  const fee = subtotal * .0027
  const total = subtotal + tax + fee

  const placeOrder = () => {
    Notification(
      'Shopazon', 
      'Placing Order...', 
      2500, 
      'success',
      'top-right',
      )
    setTimeout(() => navigate('/confirmation'), 2200)
  }

  return (
    <div className='final__checkout'>
      <ReactNotifications/>

      {/* top__row */}
      <div className="top__row">
        <Link to='/'>
        <img src="https://i.ibb.co/3F1ZnFk/shopazon-clear.png"
        id='login__logo'
        />
        </Link>

        <h2>Checkout ({cart.length} items)</h2>
        <LockIcon/>
      </div>
      <div className="top__line"> </div>
      {/* top__row end */}

    <div className="final__container">

      {/* start left__column */}
       <div className="left__column">
 
        {/* 1 SHIPPING ADDRESS */}
        <div className='customer__info'>
          <h4 className='info__item'>1</h4>
          <h4 className='info__item'>Shipping Address</h4>
          <p className='small__text'>
          Mr. John Doe <br/>  
          Test Address 4300 N. First Ave <br/>  
          Cityville, CA 90011<br/>  
          </p>

        </div>
        <hr></hr>

        {/* 2 PAYMENT METHOD */}
        <div className='customer__info'>
          <h4 className='info__item'>2</h4>
          <h4 className='info__item'>Payment Method</h4>
          <p className='small__text'>
            <img src={Visa} width={40}/>  
            <b> Visa</b> ending in 1234, not a real card<br/>
            <br/>
            <b> Billing Address:</b> Same as shipping address<br/>    
          </p>

        </div>
        <hr></hr>

        {/* 3 REVIEW ITEMS AND SHIPPING */}
        <div className='customer__info'>
          <h4 className='info__item'>3</h4>
          <h4 className='info__item'>Review Items and Shipping</h4>
        </div>

        {cart.map(item => 
        (
          console.log(item.id),
            <FinalCheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}

        <div className='total__review'>

          <div className='link final__btn__lower'
          >
            <Button className='btn__lower' onClick={placeOrder}>
            Place your order  
            </Button>
          </div> 

          <div>
          <div className='order__items total left__pad'>
            <h4 className='order__total__lower'>Order total: 
              <CurrencyFormat
                renderText={(value) =>(<>{value}</>)}
                decimalScale={2}
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={" $"}
              />
            </h4>
            </div>
            <p className='smaller__text terms'>By placing your order, you agree to Shopazon's privacy notice and conditions of use.</p>
          </div>
        </div>
      </div> {/* end left__column */}

      {/* right__column */}
      <div className="right__column">

        <div className='final__btn__container'>
            <Button className='final__btn' onClick={placeOrder}>
              Place your order
            </Button>
        </div>
        
        <p className='smaller__text terms__right'>By placing your order, you agree to Shopazon's privacy notice and conditions of use.</p>

      <hr></hr>
      <h4 className='order__summary'>Order Summary</h4>
      <div className='order__items small__text'>
        <p>Items ({cart.length}):</p>
        <p>
          <CurrencyFormat
            renderText={(value) =>(<>{value}</>)}
            decimalScale={2}
            value={subtotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          </p>
      </div>
      <div className='order__items small__text'>
        <p>Shipping & handling</p>
        <p>$0.00</p>
      </div>
      <div className='break'>__________________________</div>
      <div className='order__items small__text'>
        <p>Total before tax:</p>
        <p><CurrencyFormat
            renderText={(value) =>(<>{value}</>)}
            decimalScale={2}
            value={subtotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          /></p>
      </div>
      <div className='order__items small__text'>
        <p>Estimated tax to be collected:</p>
        <p>
          <CurrencyFormat
            renderText={(value) =>(<>{value}</>)}
            decimalScale={2}
            value={tax}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </p>
      </div>
      <div className='order__items small__text'>
        <p>Estimated Regulatory Fees:</p>
        <p>
          <CurrencyFormat
            renderText={(value) =>(<>{value}</>)}
            decimalScale={2}
            value={fee}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </p>
      </div>
      <hr/>
      <div className='order__items total'>
        <h4>Order total:</h4>
        <h4>
          <CurrencyFormat
            renderText={(value) =>(<>{value}</>)}
            decimalScale={2}
            value={total}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </h4>
      </div>
      

       </div> {/* end right_column */}

       </div> {/* end final__container */}
    </div> // end final__checkout
  )
}

export default FinalCheckout