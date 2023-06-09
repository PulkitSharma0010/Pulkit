import React from 'react'
import Project from './Project'
import "./Projects.css"
import tictactoe from "./tictactoe.png"

export default function Projects() {
  return (
    <div className='projectsDiv'>
        <h1 className='projectsMainHeading'>Projects</h1>
        <div className="projectsContentDiv">
            <Project src= {tictactoe} title="Tic Tac Toe Game" stack="React Js" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem, vitae impedit ratione repellendus totam voluptate nesciunt, molestias dolore, dicta placeat natus officiis. Debitis molestiae earum nesciunt cum, blanditiis voluptas." link="abc"/>
            <Project src= {tictactoe} title="Tic Tac Toe Game" stack="React Js" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem, vitae impedit ratione repellendus totam voluptate nesciunt, molestias dolore, dicta placeat natus officiis. Debitis molestiae earum nesciunt cum, blanditiis voluptas." link="abc"/>           
        </div>
    </div>
  )
}
