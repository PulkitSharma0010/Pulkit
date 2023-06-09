import React from 'react'
import "./About.css"
import webdev from "./webdev.png"

export default function About() {
    return (
        <div className='aboutDiv'>
            <h1 className='aboutMainHeading'>About Me</h1>
            <div className='aboutContentDiv'>
                <div className='aboutSubImgDiv'>
                    <img src={webdev} alt="" />
                </div>
                <div className='aboutSubDiv'>
                    <h2 className='aboutHeading'>Skills</h2>
                    <div className='aboutSkillsDiv'>
                        <div>
                            <h3 className='aboutSubHeading'>Languages</h3>
                            <ul className='aboutList'>
                                <li className='aboutListItems'>C++</li>
                                <li className='aboutListItems'>Java</li>
                                <li className='aboutListItems'>JavaScript</li>
                                <li className='aboutListItems'>Assembly Language</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='aboutSubHeading'>Development</h3>
                            <ul className='aboutList'>
                                <li className='aboutListItems'>HTML</li>
                                <li className='aboutListItems'>CSS</li>
                                <li className='aboutListItems'>React JS</li>
                                {/* <li className='aboutListItems'>Assembly Language</li> */}
                            </ul>
                        </div>
                    </div>
                    <h2 className='aboutHeading'>Experience</h2>
                    <p className='aboutExperience'>Worked as a React Developer at Department of Information Technology Himachal Pradesh.There I worked on a front-end project of the state government and made the assigned product from scratch by applying the Skills that I learnt within the Internship Period.</p>

                </div>
            </div>
        </div>
    )
}
