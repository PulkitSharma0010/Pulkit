import React from 'react'
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className='navBarDiv'>
      <ul className='navBarList'>
        <li className='navBarListItem'>Home</li>
        <li className='navBarListItem'>About</li>
        <li className='navBarListItem'>Projects</li>
        <li className='navBarListItem'>Contact Me</li>
      </ul>
    </div>
  )
}
