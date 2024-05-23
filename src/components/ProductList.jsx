import React from 'react'
import '../styles/ProductList.css'
import banner from '../Assests/banner.avif'
const ProductList = () => {
    
  return (
    <div>
      <img className='banner-image' src={banner} alt='' />
        <div className='products-container'>
            <button className='product'>Products</button>
        </div>
        <div className='button-container'>
            <button className='all-button'>All</button>
            <button className='buttons'>Home</button>
            <button className='buttons'>Apparel</button>
            <button className='buttons'>Accessories</button>
        </div>
    </div>
  )
}

export default ProductList
