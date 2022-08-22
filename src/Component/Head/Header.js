import React from 'react'
import "./Header.css"
import logo from '../pic/logo.png'

const Header = () => {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        header.classList.toggle('active', window.scrollY > 100);
    })

    const [Mobile, setMobile] = React.useState(false);

    return (
      <>
        <header className='header'>
            
        </header>
      </>
    )
}

export default Header