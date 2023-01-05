import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__option">
          <article className='contact__option'>
          <MdOutlineMail className='contact__option-icon'/>
            <h4 className=''>Email</h4>
            
            <h5>jorgesolisruiz@gmail.com</h5>
            <a href="mailto:jorgesolisruiz@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
          <AiFillLinkedin className='contact__option-icon'/>
            <h4 className=''>LinkedIn</h4>
            <h5>Jorge Solis</h5>
            <a href="https://www.linkedin.com/in/jorge-solis-889689253/">Send a message</a>
          </article>
       </div>
        <form >
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact