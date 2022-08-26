import React from 'react'
import './AboutMe.css'
import Card from './Card'

const AboutMe = () => {
  return (
    <>
        <section className='AboutMe top' id='aboutMe'>
            <div className='container'>
                <div className='heading'>
                    <h2>About me</h2>
                </div>
                <Card />
            </div>
        </section>
    </>
  )
}

export default AboutMe