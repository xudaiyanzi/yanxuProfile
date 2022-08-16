import React from 'react'
import Card from './Card'
import './Resume.css'
import ResumeApi from './ResumeApi'

const Resume = () => {
  return (
    <>
        <section className='Resume' id='resume'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h1>My Resume</h1>
                </div>

                <div className='content-section mtop d_flex'>
                    <div className='left'>
                        <div className='heading'>
                            <h4>2014-2023</h4>
                            <h1>Education</h1>
                        </div>

                        <div className='content'>
                            {ResumeApi.map((val, id) => {
                                if (val.category === 'education') {
                                    return (
                                        <Card 
                                        key={id} 
                                        title={val.title} 
                                        year={val.year}/>
                                    )
                                }}
                            )}
                        </div>
                    </div>
                    <div className='left'>
                        <div className='heading'>
                            <h4>2015-2023</h4>
                            <h1>Work Experience</h1>
                        </div>

                        <div className='content'>
                            {ResumeApi.map((val, id) => {
                                if (val.category === 'experience') {
                                    return (
                                        <Card 
                                        key={id} 
                                        title={val.title} 
                                        year={val.year}
                                        desc={val.desc}/>
                                    )
                                }}
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Resume