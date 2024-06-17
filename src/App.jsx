import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs'
import Explore from './components/Explore/Explore'
import WhatToDo from './components/WhatToDo/WhatToDo'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Explore/>
      <WhatToDo/>
    </div>
  )
}

export default App