import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/jorge-solis-889689253/" target="_blank"><BsLinkedin className='header_socials-icon'/></a>
        <a href="https://github.com/watssupp" target="_blank"><BsGithub className='header_socials-icon'/></a>
    </div>
  )
}

export default HeaderSocials