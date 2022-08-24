import React from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Home/Home'
import './App.css'
import AboutMe from './Component/AboutMe/AboutMe'
import Portfolio from './Component/Portfolio/Portfolio'
import Blog from './Component/Blog/Blog'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer'
import Config from './Component/Config/Config';
import ParticleBg from './Component/ParticleBg/ParticleBg'
import Nav from './Component/Nav/Nav'

function App() {
  return (
    <>
      
      <Home />
      <Nav />
      <AboutMe />
      <Portfolio />
      <Blog />
      <Contact />
      <ParticleBg />
    </>
  )
}

export default App