import React from 'react'
import './Projects.css'
import Projects_data from './Projects_data.js'
import Card from './Card'

const Projects = () => {

  return (
    <>
        <section className='porfolio top' id='projects'>
            <div className='container'>
                <div className='heading text-center'>
                    <h2>My Projects</h2>
                </div>

                <div className='content grid'>
                    {Projects_data.map((value, index) => {
                        return (
                            <Card 
                            key={index}
                            image={value.image}
                            category={value.category}
                            title={value.title}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Projects