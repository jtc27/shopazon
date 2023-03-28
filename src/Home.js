//prevent initial render
//https://medium.com/swlh/prevent-useeffects-callback-firing-during-initial-render-the-armchair-critic-f71bc0e03536

import React from 'react'
import './Home.css'
import Product from './Product'

import { useStateValue } from './StateProvider'
import { useEffect, useRef } from 'react'

import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css' 


function Home() {

  const [{cart, user}, dispatch] = useStateValue()
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      console.log('initial render')
      initialRender.current = false
    } else {
      notify()
    }
  }, [cart])

  const thing = 'y'

  const notify = () => {
    Store.addNotification({
      title: "You Added",
      message: cart[cart.length-1].title,
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
    console.log(thing)
  }

  return (
    <div className='home'>
      <ReactNotifications/>
      <div className="home__container">
        <img src="https://m.media-amazon.com/images/I/61rr3pvwBsL._SX3000_.jpg" 
        className='home__image'
        alt="" />
      </div>

    <div className="home__row">      {/* ROW 1 */}
      <Product 
      id='703023209'
      title='INSIGNIA 32-inch Class F20 Series Smart HD 720p Fire TV (NS-32F201NA23, 2022 Model)'
      image='https://m.media-amazon.com/images/I/815E5aShTqL._AC_SL1500_.jpg'
      price={109.99}
      rating={5}
      />
      <Product 
      id='1903223208'
      title="Marc Anthony Deep Conditioning Hair Mask for Dry & Damaged Hair, Grow Long Biotin - Argan Oil "
      image='https://m.media-amazon.com/images/I/61Fxd0KGfPL._SL1500_.jpg'
      price={8.99}
      rating={5}
      />
      <Product 
      id='0354222109'
      title="Alienware M15 R6 Gaming Laptop - 15.6-inch FHD (1920 x 1080) 1ms 360Hz Display, Intel Core i7-11800H, 32GB DDR4 RAM, 1TB SSD, NVIDIA RTX 3070 8GB"
      image='https://m.media-amazon.com/images/I/71J1lHBTo3L._AC_SL1500_.jpg'
      price={1879.99}
      rating={5}
      />
    </div>

    <div className="home__row">      {/* ROW 2 */}
      <Product 
      id='6345232106'
      title="Uproot Cleaner Bundle - Max, Pro and Mini - Non-Damaging Lint Remover"
      image='https://m.media-amazon.com/images/I/7156kpxi5KL._AC_SL1500_.jpg'
      price={49.99}
      rating={5}
      />
      <Product 
      id='853521039'
      title="PS5 Console- Horizon Forbidden West Bundle "
      image='https://i5.walmartimages.com/asr/509f48d3-3147-4e04-a6a0-b9b070acb496.838ad462742fc2f268a189d049611c84.jpeg'
      price={549.99}
      rating={5}
      />
      <Product 
      id='5564654632'
      title="Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling"
      image='https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg'
      price={229.99}
      rating={5}
      />
      <Product 
      id='5435345622'
      title="EXLURA Women's Lantern Sleeve Tie Back Summer Dress Ruffled Off Shoulder A-Line Vintage Mini Dress"
      image='https://m.media-amazon.com/images/I/51LptXfBVHL._AC_UX679_.jpg'
      price={39.99}
      rating={5}
      />
    </div>

    <div className="home__row">       {/* ROW 3 */}
      <Product 
      id='2212545622'
      title="How to Catch a Leprechaun Hardcover – Picture Book, February 2, 2016"
      image='https://m.media-amazon.com/images/P/1492632910.01._SCLZZZZZZZ_SX500_.jpg'
      price={8.99}
      rating={5}
      />
      <Product 
      id='0000000001'
      title="The Mountain Men's Three Wolf Moon Short Sleeve Tee"
      image='https://m.media-amazon.com/images/I/71oYtaK8h8L._AC_UY879_.jpg'
      price={27.95}
      rating={5}
      />
      <Product 
      id='38388'
      title={`Framed LeBron James NBA Scoring Record Facsimile Laser Engraved Signature Basketball 15"x12" 3 Photo Collage`}
      image='https://m.media-amazon.com/images/I/616wkj8PbGL._AC_SL1500_.jpg'
      price={59.99}
      rating={5}
      />
    </div>

    </div>
  )
}



export default Home