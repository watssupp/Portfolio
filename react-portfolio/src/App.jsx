import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experiance from './components/Experience/Experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Experiance/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App