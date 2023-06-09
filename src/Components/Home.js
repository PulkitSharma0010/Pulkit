import React from 'react'
import "./Home.css"
import resume from "./Resume.pdf"
import webdev from "./webdev.png"

export default function Home() {
    return (
        <div className='homeDiv'>
            <div className='homeContentDiv'>
                <div>
                <h1 className='homeHeading'>Hi,I am <span className='homeSpan'>Pulkit</span></h1>
                <h2 className='homeIntro'>I am a <span className='homeSpan'>Web Developer</span></h2>
                <a href={resume} download="MyResume" className='homeCVButton'>Download CV</a>
                </div>
            </div>
            <div className='homeImgDiv'>
                <img src={webdev} alt="hi" />
            </div>
        </div>
    )
}
