import React from 'react'
import './Portfolio.css'
import Portfolio_data from './Portfolio_data.js'
import Card from './Card'

const Portfolio = () => {
  return (
    <>
        <section className='porfolio top' id='portfolio'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4> VISIT MY PORFORLIO AND LEAVE YOUR FEEDBACK</h4>
                    <h1>My Portfolio</h1>
                </div>

                <div className='content grid'>
                    {Portfolio_data.map((value, index) => {
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

export default Portfolio