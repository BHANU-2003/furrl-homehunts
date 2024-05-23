import React from 'react'
import '../styles/ProductItem.css'
import Blue from '../Assests/blue_cotton.jpg'
import Western from '../Assests/western.webp'
import Liva from '../Assests/Liva.webp'
import Straight from '../Assests/Straight.webp'
import polyster from '../Assests/polyster.webp'
import indigo from '../Assests/indigo.jpg'
import green from '../Assests/green.jpg'
import orange from '../Assests/orange.webp'
import olive from '../Assests/olive.jpg'
const ProductItem = () => {
  return (
    <div>
      <div className='products'>
        <img className='image' src={Western} alt='' />
        <h1>YELLOW RAYON TIERED DRESS</h1>
        <p>Yellow & Pink Soft To Touch Rayon Tiered Dress With Puff Sleeves For Extra Chic</p>
        <h3>MRP <span>₹3,299</span></h3>
      </div>
      <div className='products'>
        <img className='image' src={Blue} alt='' />
        <h1>ICE BLUE COTTON TIERED DRESS</h1>
        <p>Stay Stylish In This Ice Blue Cotton Tiered Dress Featuring A Multicolor Print And 3/4th Sleeves, Perfect For A Classic, Chic Look.</p>
        <h3>MRP <span>₹2,299</span></h3>
      </div>
      <div className='products'>
        <img className='image' src={Liva} alt='' />
        <h1>CHERRY RED LIVA FLARED PRINTED DRESS</h1>
        <p>Shine In A Cherry Red LIVA Flared Dress, Perfect For Festive Occasions With Its Vibrant Print.</p>
        <h3>MRP <span>₹3,000</span></h3>
      </div>
      <div className='products'>
        <img className='image' src={Straight} alt='' />
        <h1>NAVY LIVA STRAIGHT PRINTED DRESS</h1>
        <p>Embellished Straight Printed Dress</p>
        <h3>MRP <span>₹3,500</span></h3>
      </div>
      <div className='products'>
        <img className='image' src={polyster} alt='' />
        <h1>BLUE POLYESTER TIERED DRESS</h1>
        <p>Add A Touch Of Spring To Your Look With This Blue-Tiered Polyester Dress, Featuring Charming Floral Print & Puff Sleeves</p>
        <h3>MRP <span>₹2,300</span></h3>
      </div>
      <div className='products'>
        <img className='image' src={indigo} alt='' />
        <h1>INDIGO LIVA A-LINE PRINTED DRESS</h1>
        <p>Indigo LIVA A-Line Printed Dress</p>
        <h3>MRP <span>₹2,300</span></h3>
      </div>
      <div className='products'>
        <img className='image' src={green} alt='' />
        <h1>GREEN COTTON TIERED DRESS</h1>
        <p>Step Out In Style With This Green Cotton Tiered Dress, Featuring A Floral Print And Off-Shoulder Design.</p>
        <h3>MRP <span>₹2,000</span></h3>
      </div>
      <div className='products'>
        <img className='image' src={orange} alt='' />
        <h1>ORANGE RAYON TIERED DRESS</h1>
        <p>Floral Printed Dress Featuring V-Neck And Three-Fourth Sleeves</p>
        <h3>MRP <span>₹2,500</span></h3>
      </div>
      <div className='products'>
        <img className='image' src={olive} alt='' />
        <h1>OLIVE LIVA PRINTED JUMPSUIT DRESS</h1>
        <p>Olive LIVA Printed Jumpsuit Dress</p>
        <h3>MRP <span>₹1,500</span></h3>
      </div>
    </div>
  )
}

export default ProductItem
