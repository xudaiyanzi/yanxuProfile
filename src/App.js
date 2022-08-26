import React from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Home/Home'
import './App.css'
import AboutMe from './Component/AboutMe/AboutMe'
import Projects from './Component/Projects/Projects'
import Blog from './Component/Blog/Blog'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Config from './Component/Config/Config'
import ParticleBg from './Component/ParticleBg/ParticleBg'
import Nav from './Component/Nav/Nav'

function App() {
  return (
    <>
      
      <Home />
      <Nav />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      <ParticleBg />
    </>
  )
}

export default App