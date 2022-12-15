import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import { TbCertificate } from 'react-icons/tb'
import{GrReactjs} from 'react-icons/gr'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="about me" />
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <TbCertificate className='about__icon'/>
            <h5>Experiance</h5>
            <small>UTA Full Stack Development bootcamp certificate</small>
          </article>
          <article className='about__card'>
          <GrReactjs className='about__icon'/>
            <h5>Tools</h5>
            <small>JavaScript, CSS, HTML5, SQL, NoSQL, MongoDB, MySQL, Express, React</small>
          </article>
        </div>
        <p>
              {/* insert about me info */}
              </p>
        <a href="#contact" className='btn btn-primary'>Contact</a>
      </div>
      </div>
      
    </section>
  )
}

export default About