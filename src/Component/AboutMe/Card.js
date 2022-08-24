import React from 'react'
import AboutMeData from './AboutMeData'
import {FaUserGraduate} from 'react-icons/fa'

const Card = (props) => {
  return (
        <div className='content'>
            {
                AboutMeData.map((val, index) => {
                    if (val.category === 'education') {
                        return (
                            <div className='ResumeBox'>
                                <div className=''>
                                    <h3>{val.title}</h3>
                                    <h5>{val.year}</h5>
                                </div>
                            </div>
                        )
                    } else if (val.category === 'experience') { 
                        return (
                            <div className='ResumeBox'>
                                <div className=''>
                                    <h3>{val.title}</h3>
                                    <h5>{val.year}</h5>
                                </div>
                                <div className='ResumeBoxDesc'>
                                    <ul>
                                    {
                                        val.desc.map((val, index) => {
                                            return (
                                                <li>{val.desc}</li>
                                            )
                                        })
                                    }
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
  )
}

export default Card