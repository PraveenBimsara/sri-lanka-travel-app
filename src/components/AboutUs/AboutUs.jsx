import React from 'react'
import './AboutUs.css'
import wild from '../../assets/wild.png'
import thrills from '../../assets/thrills.png'
import festive from '../../assets/festive.png'
import heritage from '../../assets/heritage.png'
import pristine from '../../assets/pristine.png'
import bliss from '../../assets/bliss.png'
import essence from '../../assets/essence.png'
import scenic from '../../assets/scenic.png'

const AboutUs = () => {
  return (
    <div id='about-us' className='about-us'>
        <div className="about-title">
            <h1>Welcome to Sri Lanka</h1>
            <p>See what's waiting for you on your next island getaway.<br/>
            Savour the unique experiences this island treasure has to offer.</p>
        </div>

        <div className='about-container'>
            <div className='wlid'><img src={wild} alt=''/>
            <h1>WILD</h1></div>
            <div className='thrills'>
            <img src={thrills} alt=''/>
            <h1>THRILLS</h1>
            </div>
            <div className='festive'>
            <img src={festive} alt=''/>
            <h1>FESTIVE</h1>
            </div>
            <div className='heritage'>
            <img src={heritage} alt=''/>
            <h1>HERITAGE</h1>
            </div>
            <div className='pristine'>
            <img src={pristine} alt=''/>
            <h1>PRISTINE</h1>
            </div>
            <div className="bliss">
            <img src={bliss} alt=''/>
            <h1>BLISS</h1>
            </div>
            <div className="essence">
            <img src={essence} alt=''/>
            <h1>ESSENCE</h1>
            </div>
            <div className="scenic">
            <img src={scenic} alt=''/>
            <h1>SCENIC</h1>
            </div>
        </div>
    </div>
  )
}

export default AboutUs