import React from 'react'
import logo from './pic/logo.png'

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container text-center top'>
                <img className='footerLogo' src={logo} alt='' />
                <p>Copyright &copy; 2020 Yan Xu</p>
            </div>
        </footer>
    </>
  )
}

export default Footer