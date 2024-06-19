import React from "react";
import "./WhatToDo.css";
import unique from '../../assets/unique-places.png'
import travel from '../../assets/trav-agent.png'
import visa from '../../assets/pass.png'
import plane from '../../assets/plane.png'
import hotel from '../../assets/hotel.png'
import tourist from '../../assets/tourist.png'
import driver from '../../assets/driver.png'
import camping from '../../assets/camping.jpg'
import blacklist from '../../assets/Blacklisted_Service_Providers.jpg'

const WhatToDo = () => {
  return (
    <>
    <div id="what-to-do" className="what-to-do">
      <div className="what-to-do-title">
        <h1>Plan Your Dream Holiday</h1>
        <p>
          Each day on this island promises new experiences,<br/>discoveries, and
          life-long memories. With so much to<br/>do,let us help you with these
          itineraries created just for<br/>you!
        </p>
       
      </div>
      <div className="view">VIEW ALL</div>
    </div>
    <div className='what-to-do-container'>
            <div><img src={unique} alt=''/>
            <h1>Things to See and Do</h1></div>
            <div>
            <img src={travel} alt=''/>
            <h1>Find a Travel Agent</h1>
            </div>
            <div>
            <img src={visa} alt=''/>
            <h1>Apply Sri Lankan Visa Online</h1>
            </div>
            <div>
            <img src={plane} alt=''/>
            <h1>Book a Flight</h1>
            </div>
            <div>
            <img src={hotel} alt=''/>
            <h1>Find Your Accommodation</h1>
            </div>
            <div>
            <img src={tourist} alt=''/>
            <h1>Find a Tour Guide</h1>
            </div>
            <div>
            <img src={driver} alt=''/>
            <h1>Find a Tour Driver</h1>
            </div>
            <div>
            <img src={camping} alt=''/>
            <h1>Camping Sites</h1>
            </div>
            <div>
            <img src={blacklist} alt=''/>
            <h1>Blacklisted Service Providers</h1>
            </div>
        </div>
    </>
  );
};

export default WhatToDo;
