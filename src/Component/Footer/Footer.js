import React from 'react'
import logo from '../pic/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container footer_container'>
                <img className='footer_logo' src={logo} alt='' />
                <p>Copyright &copy; 2020 Yan Xu</p>
            </div>
        </footer>
    </>
  )
}

export default Footer