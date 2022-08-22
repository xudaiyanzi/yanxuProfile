import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const Card = () => {
  return (
        <>
            <div className='socials'>
                <a href='https://www.linkedin.com/in/yan-xu-1ab19276/' className='social-icon home_hovertext' target="_blank" rel="noreferrer" data-hover='LinkedIn'><AiFillLinkedin /></a>
                <a href='https://github.com/xudaiyanzi' className='social-icon home_hovertext' target="_blank" rel="noreferrer" data-hover='GitHub'><AiOutlineGithub /></a>
            </div>
        </>
  )
}

export default Card