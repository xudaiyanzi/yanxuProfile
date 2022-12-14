import React from 'react';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {FaBlog} from 'react-icons/fa'
import {MdOutlineContactMail} from 'react-icons/md'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <a href='#home' className='hovertext' data-hover='Home'><AiOutlineHome /></a>        
        <a href='#aboutMe' className='hovertext' data-hover='Me'><AiOutlineUser /></a>
        <a href='#projects' className='hovertext' data-hover='Projects'><BiBook /></a>
        <a href='#contact' className='hovertext' data-hover='Contacts'><MdOutlineContactMail /></a>
    </nav>
  )
}

export default Nav