import React from 'react'
import Card from './Card'
import './Blog.css'
import BlogApi from './BlogApi'
import '../Projects/Projects.css'

const Blog = () => {
  return (
    <>
        <section className='Portfolio blog' id='blog'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h2>My Blog</h2>
                </div>

                <div className='content grid'>
                    {BlogApi.map((value, index) => {
                    return <Card
                            key={index}
                            image={value.image}
                            date={value.date}
                            title_one={value.title_one}
                            title_two={value.title_two}
                            title_three={value.title_three}
                            desc_one={value.desc_one}
                            desc_two={value.desc_two}
                            desc_three={value.desc_three} />
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog