import React from 'react'
import './NewProducts.css'
import ramayana from '../../assets/Ramayana.jpg'
import buddhist from '../../assets/Buddhist-place.jpg'
import welness from '../../assets/Welness.jpg'
import wilpaththu from'../../assets/Wilpaththu.jpg'
import endfinal from '../../assets/end-final.png'
import sltpb from '../../assets/SLTPB.jpg'
import promotion from '../../assets/Promotional.jpg'

const NewProducts = () => {
  return (
    <>
    <div id='new-products' className='new-products'>
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
    <hr className='new-hr'/>

    <div className='new-products'>
      <div className="new-products-title">
        <h1>What's New</h1>
      </div>
      <div className="products-container">
        <div className="new-product">
          <div className="image-container">
            <img className='new-image' src={wilpaththu} alt=''/>
            <h1 className='new-h'>Wilpattu National<br/>Park Wildlife<br/>Streaming</h1>
          </div>
        </div>
        <div className="new-product">
          <div className="image-container">
            <img className='new-image' src={endfinal} alt=''/>
            <h1 className='new-h'>International<br/>Endorsement</h1>
          </div>
        </div>
        <div className="new-product">
          <div className="image-container">
            <img className='new-image' src={sltpb} alt=''/>
            <h1 className='new-h'>Greatest Shows<br/>on Earth</h1>
          </div>
        </div>
        <div className="new-product">
          <div className="image-container">
            <img className='new-image' src={promotion} alt=''/>
            <h1 className='new-h'>SLTPB<br/>Promotional KIT</h1>
          </div>
        </div>
      </div>
    </div>
</>
    
  )
}

export default NewProducts
