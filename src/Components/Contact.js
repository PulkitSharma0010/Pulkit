import React from 'react'
import "./Contact.css"
import github from "./github.png"
import linkedin from "./linkedin.png"

export default function Contact() {
    return (
        <div className='contactDiv'>
            <h1 className='constactMainHeading'>Contact Me</h1>
            <div>
                <h3 className='contactInfo'>Drop a Mail :&nbsp;&nbsp;</h3><span>smlpulkit@gmail.com</span>
            </div>
            <div>
                <h3 className='socialLinks'>Social Links</h3>
                <span className='socialLinksSpan'><a href="https://github.com/PulkitSharma0010" target='blank'><img src={github} alt=""/></a></span>
                <span className='socialLinksSpan'><a href="https://linkedin.com/in/pulkit-sharma-504714260" target='blank'><img src={linkedin} alt=""/></a></span>
            </div>
        </div>
    )
}
