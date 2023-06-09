import React from 'react'
import "./Project.css"

export default function Project({src,title,stack,description,link}) {
  return (
    <div className='projectDiv'>
      <div className='projectImgSubDiv'><img src={src} alt="" /></div>  
      <div className='projectSubDiv'>
      <h2 className='projectTitle'>{title}</h2>
      <h4 className='projectStack'>{stack}</h4>
      <p className='projectDescription'>{description}</p>
      <a href={link} target='blank'>Try It out</a>
      </div>
    </div>
  )
}
