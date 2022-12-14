import React from 'react'
import './header.css'
import CTA from './CTA'

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jorge Solis</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default header