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
                    <p>I am passionate about solving real world problem using both empirical and theoretical ways.</p>
                </div>
                <Card />
            </div>
        </section>
    </>
  )
}

export default AboutMe