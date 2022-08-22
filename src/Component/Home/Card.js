import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Card = () => {
  return (
        <>
            <div className='socials'>
                <a href='https://www.linkedin.com/in/yan-xu-1ab19276/' className='social-icon home_hovertext' target="_blank" rel="noreferrer" data-hover='LinkedIn'><BsLinkedin /></a>
                <a href='https://github.com/xudaiyanzi' className='social-icon home_hovertext' target="_blank" rel="noreferrer" data-hover='GitHub'><BsGithub /></a>
            </div>
        </>
  )
}

export default Card