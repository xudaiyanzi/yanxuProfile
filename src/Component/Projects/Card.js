import React,  {useState} from 'react'
import ProjectsData from './ProjectsData.js'

const Card = (props) => {

    return (
        <>
            {
                ProjectsData.map((val, index) => {
                    if (val.image_site) {
                        return (
                            <article className='projects_item' key={index}>
                                <h6>{val.category}</h6>
                                <div className='projects_item_img'>
                                    <img src={val.image} alt=''/>
                                </div>
                                <div>
                                    <a href={val.image_site} className='pic_copyright' target='_blank'>Picture copyRight</a>
                                </div>
                                <div className='projects_item_title'>
                                    <h5>{val.title}</h5>
                                </div>
                                <div className='projects_item_links'>
                                    <a href={val.url} className='projects_btn' target='_blank'>Demo</a>
                                </div>
                            </article>
                        )
                    } else {
                        return (
                            <article className='projects_item' key={index}>
                                <h6>{val.category}</h6>
                                <div className='projects_item_img'>
                                    <img src={val.image} alt=''/>
                                </div>
                                <div className='projects_item_title'>
                                    <h5>{val.title}</h5>
                                </div>
                                <div className='projects_item_links'>
                                    <a href={val.url} className='projects_btn' target='_blank'>Demo</a>
                                </div>
                            </article>
                        )
                    }
                    
                })
            }
            
        </>
    )
}

export default Card