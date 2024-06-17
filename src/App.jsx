import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import Explore from './components/Explore/Explore'
import WhatToDo from './components/WhatToDo/WhatToDo'
import NewProducts from './components/NewProducts/NewProducts'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Explore/>
      <WhatToDo/>
      <NewProducts/>
      <Footer/>
    </div>
  )
}

export default App