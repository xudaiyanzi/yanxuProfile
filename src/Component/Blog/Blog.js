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
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog