import React, { useRef } from 'react'
import './Contact.css'
import logo from '../pic/logo.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const SERVICE_ID = process.env.REACT_APP_ServiceID;
    const TEMPLATE_ID = process.env.REACT_APP_TemplateID;
    const PUBLIC_KEY = process.env.REACT_APP_PublicKey;
    const SITE_KEY = process.env.REACT_APP_GOOGLE_RECAPCHA_SITE_KEY;

    const form = useRef();

    const sendEmail = (e) => {
        console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            console.log('message sent');
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <>
            <section className='Contact' id='contact'>
                <div className='container top'>
                    <div className='contact_heading'>
                        <h2>Contact with me</h2>
                    </div>

                    <div className='content d_flex'>
                        <div className='contact_left'>
                            <div className='contact_logo'>
                                <img src={logo} alt='logo' />
                            </div>
                            <div className='contact_details'>
                                <h6>Email: yanxutx@gmail.com</h6>
                                <br />
                                <span>Find ME AT: 
                                    <span>
                                        <a href='https://www.linkedin.com/in/yan-xu-1ab19276/' className='contact_social_icon contact_social_hovertext' target="_blank" rel="noreferrer" data-hover='LinkedIn'><AiFillLinkedin /></a>
                                        <a href='https://github.com/xudaiyanzi' className='contact_social_icon contact_social_hovertext' target="_blank" rel="noreferrer" data-hover='GitHub'><AiOutlineGithub /></a>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className='contact_right'>
                            <form ref={form} onSubmit={sendEmail} className='contact_form'>
                                <div className='contact_item'>
                                    <label className='label_item'>Name:</label>
                                    <input className='input_item' type="text" name="from_name" placeholder='Full Name'/>
                                </div>
                                <div className='contact_item'>
                                    <label className='label_item'>Email:</label>
                                    <input className='input_item' type="email" name="from_email" placeholder='eg. xx@gmail.com'/>
                                </div>
                                <div className='contact_item'>
                                    <label className='label_item'>Subject:</label>
                                    <input className='input_item' type="text" name="from_subject" placeholder='eg. Interest in your project'/>
                                </div>
                                <div className='contact_item'>
                                    <label className='label_item'>Message</label>
                                    <textarea name="message" className='message_item'/>
                                    <div src='https://www.google.com/recaptcha/api.js' className="g-recaptcha" data-sitekey={SITE_KEY}>
                                    </div>
                                    <input type="submit" value="Send" className='send_btn'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact