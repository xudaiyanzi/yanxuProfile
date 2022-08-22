import React from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Home/Home'
import './App.css'
import Features from './Component/Features/Features'
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
      <ParticleBg />
      <Home />
      <Nav />
      <Features />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  )
}

export default App