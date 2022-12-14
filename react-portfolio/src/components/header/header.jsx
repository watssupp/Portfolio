import React from 'react'
import './header.css'

function header() {
  return (
    <header>
      <div classname=".container.header_container">
        <h5>Hello I'm</h5>
        <h1>Jorge Solis</h1>
        <h5 classname="text-light">FullStack Developer</h5>
      </div>
    </header>
  )
}

export default header