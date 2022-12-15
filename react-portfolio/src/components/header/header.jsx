import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../assets/me.jpg";
import HeaderSocials from './HeaderSocials';

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jorge Solis</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className= "me">
          <img src={ME} alt="me" /> 
        </div>
      </div>
    </header>
  )
}

export default header