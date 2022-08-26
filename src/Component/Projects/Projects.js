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
                    <h4> VISIT MY PORFORLIO AND LEAVE YOUR FEEDBACK</h4>
                    <h1>My Projects</h1>
                </div>

                <div className='content grid'>
                    {Projects_data.map((value, index) => {
                        return (
                            <Card 
                            key={index}
                            image={value.image}
                            category={value.category}
                            totalLike={value.totalLike}
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