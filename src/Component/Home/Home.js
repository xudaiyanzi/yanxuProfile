import './Home.css';
import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import herPic from '../pic/her.png';
import logo from '../pic/logo.png'
import Card from './Card';

const Home = () => {
    const words = [" software developer.", " research scientist.", " foodie :)"];
    const { text } = useTypewriter({
        words,
        loop: 0, 
    });
    return (
      <>
        <section className='her' id='home'>
            <div>
                <img className='logoImage' src={logo} alt='' />           
            </div>
            <div className='container her_container'>
                <div className='text_div'>
                    <h4>
                        {'Hi, my name is Yan.'}
                    </h4>
                    <h2>
                        {'I am a '}
                        <span class='her_role'>
                            {text}
                            <Cursor />
                        </span>
                    </h2>
                </div>
                <div>
                    <img src={herPic} alt='' className='her_pic  pic_div' />
                </div>
                <Card />
            </div>
        </section>
    </>
  )
}

export default Home