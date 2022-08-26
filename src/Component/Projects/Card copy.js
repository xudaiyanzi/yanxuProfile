import React,  {useState} from 'react'
import test_img from '../pic/pic_projects/OOP_Pacman.png'

const Card = (props) => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    // console.log(props.image)

    if (modal) {
        document.body.classList.add("active-modal")
      } else {
        document.body.classList.remove("active-modal")
    }
    return (
        <>
            <div className='box btn_shadow'>
                <div className='image'>
                    <img src={props.image} alt='' onClick={toggleModal}/> 
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}>{props.category}</span>
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    <a href='#popup' className='arrow' onClick={toggleModal}>
                        <i className='fas fa-arrow-right'></i>
                    </a>
                </div>
            </div>
            
            {/* popup */}
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'>
                        <div className='modal-content d_flex'>
                            <div className='modal-img left'>
                                <img src={props.img} alt='' />
                            </div>

                            <div className='modal-text right'>
                                <span>Featured - Design</span>
                                <h1>{props.title}</h1>
                                <p>descrb1</p>
                                <div className='button f_flex mtop'>
                                    <button className='btn_shadow'>
                                        VIEW PROJECT <i className='fas fa-chevron-right'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}

export default Card