import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NextThing from './components/NextThing'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <NextThing />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App