import React from "react";
import CV from '../../assets/2022-resume.pdf'

const CTA = () => {
    return(
        <div className="cta">
            <a href={CV} download className="btn">Download Resume</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
    )
}

export default CTA