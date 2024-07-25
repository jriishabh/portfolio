import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/about'
import Services from './components/Services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App