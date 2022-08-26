import React from 'react'
import './Projects.css'
import Card from './Card'

const Projects = () => {

  return (
    <>
        <section className='projects top' id='projects'>
            <div className='container'>
                <div className='projects_heading'>
                    <h2>My Recent Projects</h2>
                </div>
                <div className='projects_container'>
                    <Card />
                </div>
            </div>
        </section>
    </>
  )
}

export default Projects