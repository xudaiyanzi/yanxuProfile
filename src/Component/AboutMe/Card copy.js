import React from 'react'
import AboutMeData from './AboutMeData'
import {FaUserGraduate} from 'react-icons/fa'
import {FaUserTie} from 'react-icons/fa'
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Card = (props) => {
  return (
        <div className='content'>
            <VerticalTimeline>
                {
                    AboutMeData.map((val, index) => {
                        if (val.category === 'education') {
                            return (
                                <VerticalTimelineElement className='ResumeBox'
                                date={val.year}
                                dateClassName="date"
                                iconStyle={{background: '#fff', color: '#fff',}}
                                iconClassName="iconC"
                                icon={<FaUserGraduate size={50} color='#3c3e41'/>}
                                layout='2-columns'                
                                >
                                    <h5 className='vertical-timeline-element-title'>{val.title}</h5>
                                    <h6 className='vertical-timeline-element-subtitle'>{val.school}</h6>
                                </VerticalTimelineElement>
                            )
                        } else if (val.category === 'experience') { 
                            return (
                                <div className='ResumeBox'>
                                    <div className=''>
                                        <h5>{val.title}</h5>
                                        <h6>{val.year}</h6>
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
            </VerticalTimeline>
        </div>
  )
}

export default Card