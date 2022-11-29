import React from 'react'



export default function Projectitem(props) {
  return (
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={props.photo} alt="Avatar" className='avtar' />
    </div>
    <div className="flip-card-back">
      <h1 className='titel'>{props.Titel}</h1> 
      <p className='Des'> <p className='st'>Description</p><br />{props.Des}</p> 
      <p className='link'><a href={props.Go} className='mm'>Go to link</a></p>
    </div>
  </div>
</div>
          
   
  )
}