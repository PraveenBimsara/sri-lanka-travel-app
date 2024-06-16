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
    <div className='about-us'>
        <div className="about-title">
            <h1>Welcome to Sri Lanka</h1>
            <p>See what's waiting for you on your next island getaway.<br/>
            Savour the unique experiences this island treasure has to offer.</p>
        </div>

        <div className='about-container'>
            <img src={wild} alt=''/>
            <img src={thrills} alt=''/>
            <img src={festive} alt=''/>
            <img src={heritage} alt=''/>
            <img src={pristine} alt=''/>
            <img src={bliss} alt=''/>
            <img src={essence} alt=''/>
            <img src={scenic} alt=''/>
        </div>
    </div>
  )
}

export default AboutUs