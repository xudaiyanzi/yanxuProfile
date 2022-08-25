import React from 'react'
import AboutMeData from './AboutMeData'
import {FaUserGraduate} from 'react-icons/fa'
import {FaUserTie} from 'react-icons/fa'

const Card = (props) => {
  return (
        <div className='content content_flex'>
            <div className='left'>
                <div className='left_title'>
                    <h4>Education</h4>
                </div>
                <div className='timeline'>
                    {
                        AboutMeData.map((val, index) => {
                            if (val.category === 'education') {
                                return (
                                    <div className='timeline_item_container' key={index}>
                                        <div className='timeline_item d_flex'>
                                            <h5 className='item_title'>{val.title}</h5>
                                            <h6 className='item_school_year'>{val.school}, {val.year}</h6>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className='left'>
                <div className='left_title'>
                    <h4>Professional experience</h4>
                </div>
                <div className='timeline'>
                    {
                        AboutMeData.map((val, index) => {
                            if (val.category === 'experience') {
                                return (
                                        <div className='timeline_item_container' key={index}>
                                            <div className='timeline_item'>
                                                <h5>{val.title}</h5>
                                                <h6>{val.company}, {val.year}</h6>
                                                <hr />
                                                <div>
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
                                        </div>
                                    )
                                }
                            }
                        )
                    }
                
                </div>
            </div>
        </div>
  )
}

export default Card