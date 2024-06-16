import React from 'react'
import './Navbar.css'
import logo from '../../assets/sri-lanka.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt=''/>
        <ul className='navbar-menu'>
            <li>Home</li>
            <li>About Us</li>
            <li>Explore Stories</li>
            <li>What To Do</li>
            <li>New Products</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar