import React from 'react'
import './NewProducts.css'
import ramayana from '../../assets/Ramayana.jpg'
import buddhist from '../../assets/Buddhist-place.jpg'
import welness from '../../assets/Welness.jpg'

const NewProducts = () => {
  return (
    <div className='new-products'>
      <div className="new-products-title">
        <h1>New Products</h1>
      </div>
      <div className="products-container">
        <div className="new-product">
          <div className="image-container">
            <img src={ramayana} alt=''/>
            <div className="overlay"></div>
            <h1 className="product-title">RAMAYANAYA YATHRA</h1>
          </div>
        </div>
        <div className="new-product">
          <div className="image-container">
            <img src={buddhist} alt=''/>
            <div className="overlay"></div>
            <h1 className="product-title">BUDDHIST PLACES</h1>
          </div>
        </div>
        <div className="new-product">
          <div className="image-container">
            <img src={welness} alt=''/>
            <div className="overlay"></div>
            <h1 className="product-title">WELLNESS TOURISM</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProducts
