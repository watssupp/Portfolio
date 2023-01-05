import React from 'react'
import './Experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>experience</h2>
      <div className='container experience__container'>
      <div className="experiance__frontend">
      <h3>Frontend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
          <BsCheckCircleFill className= "experience__details-icon"/>
          <div>
            
          <h4>HTML</h4>
          <small className='text-light'>Experience</small>
          
          </div>
        </article>
        <article className='experience__details'>
          <BsCheckCircleFill className= "experience__details-icon"/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Experience</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsCheckCircleFill className= "experience__details-icon"/>
         <div>
         <h4>JavaScript</h4>
          <small className='text-light'>Intermediate</small>
         </div>
        </article>
        <article className='experience__details'>
          <BsCheckCircleFill className= "experience__details-icon"/>
         <div>
         <h4>React</h4>
          <small className='text-light'>Experience</small>
         </div>
        </article>
        <article className='experience__details'>
          <BsCheckCircleFill className= "experience__details-icon"/>
          <div>
          <h4>Handlebars</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

      </div>
      </div>
      <div className='experience__backend'>
      <h3>Backend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
          <BsCheckCircleFill className= "experience__details-icon"/>
          <div>
          <h4>Node JS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsCheckCircleFill className= "experience__details-icon"/>
          <div>
          <h4>Express JS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsCheckCircleFill className= "experience__details-icon"/>
         <div>
         <h4>MySQL</h4>
          <small className='text-light'>Intermediate</small>
         </div>
        </article>
        <article className='experience__details'>
          <BsCheckCircleFill className= "experience__details-icon"/>
          <div>
          <h4>MongoDB</h4>
          <small className='text-light'>Experience</small>
          </div>
        </article>
      

      </div>
      </div>
      </div>
    </section>
  )
}

export default Experience