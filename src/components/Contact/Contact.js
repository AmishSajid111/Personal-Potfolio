import React, { useRef } from 'react'

import '../Contact/Contact.css'
import fb from '../../assets/facebook-icon.png'
import insta from '../../assets/instagram.png'
import linkedin from '../../assets/youtube.png'
import github from '../../assets/twitter.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h6nekpe', 'template_v5qgbff', form.current, 'oMHdIOveFSB-qS-1e')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  <section id='contactPage'>
 
   <div className="contact">
    <h1 className='contactPageTitle'>Contact Me</h1>
     <span className="contactDesc">Plz fill out the form below to discuss any work opportunities.</span>
     <form className="contactForm" ref={form} onSubmit={sendEmail} >
        <input type="text" className="name" placeholder='Your Name' name="user_name" />
        <input type="email" className="email" placeholder='Your Email' name="user_email" />
        <textarea name="message" className='msg'  rows="5" placeholder='Your Message'/>
      <button type='submit' value='Send' className='submitBtn' >Submit</button>
     </form>
   <div className="links">
   <img src={fb} alt="" className='link' />
    <img src={insta} alt="" className='link' />
    <img src={linkedin} alt="" className='link' />
    <img src={github} alt="" className='link' />
   </div>
   </div>
  </section>
  )
}

export default Contact
