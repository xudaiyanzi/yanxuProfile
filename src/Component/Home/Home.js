import './Home.css';
import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";

import herPic from '../pic/her.png';

const Home = () => {
    const words = ["Software developer.", "Research Scientist.", "Foodie."];
    const { text } = useTypewriter({
        words,
        loop: 0, 
    });
    return (
      <>
        <section className='her' id='home'>
            <div className='container f_flex top'>
                <div className='left top'>
                    <h3>WELCOME TO MY PAGE</h3>
                    <h1>
                        Hi, I am <span>Yan Xu</span>
                    </h1>
                    <h2>
                        a {' '}
                        <span>
                            {text}
                            <Cursor />
                        </span>
                    </h2>
                    <p>I like to learn new thing and enjoy solving problems using both theoretical and empirical method.</p>
                    <div className='her_btn d_flex'>
                        <div className='col_1'>
                            <h4>FIND WITH ME</h4>
                            <div className='button'>
                                <button className='btn_shadow'>
                                    <i className='fab fa-linkedin'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-github'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right top'>
                    <div className='right_img'>
                        <img src={herPic} alt='' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home