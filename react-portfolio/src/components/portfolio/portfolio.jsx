import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Project-1.png'
import IMG2 from '../../assets/Weather-App.png'
import IMG3 from '../../assets/Tech_blog-1.jpg'
import IMG4 from '../../assets/SNA.jpg'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div> 
            <div className='portfolio__item-cta'>
            <h3>Anination</h3>
            <a href="https://github.com/hieuwy/project-1" className='btn' target= '_blank'> Github</a>
            <a /*href= insert deployed link*/ className='btn btn-primary' target='_blank'>Deployed site</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div> 
            <div className='portfolio__item-cta'>
            <h3>Weather App</h3>
            <a href="https://github.com/watssupp/Weather-App" className='btn' target= '_blank'> Github</a>
            <a /*href= insert deployed link*/ className='btn btn-primary' target='_blank'>Deployed site</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div> 
            <div className='portfolio__item-cta'>
            <h3>Tech Blog</h3>
            <a href="https://github.com/watssupp/Tech-Blog" className='btn' target= '_blank'> Github</a>
            <a /*href= insert deployed link*/ className='btn btn-primary' target='_blank'>Deployed site</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div> 
            <div className='portfolio__item-cta'>
            <h3>Mongoose database</h3>
            <a href="https://github.com/watssupp/social-network-api" className='btn' target= '_blank'> Github</a>
            </div>
        </article>

        {/*insert redux store when compleated*/ }
{/*<article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div> 
            <h3>Steller</h3>
            <a href="https://github.com/watssupp/Tech-Blog" className='btn' target= '_blank'> Github</a>
            <a /*href= insert deployed link*/ /*className='btn btn-primary' target='_blank'>Deployed site</a>
        </article>  */}

      </div>
    </section>
  )
}

export default portfolio