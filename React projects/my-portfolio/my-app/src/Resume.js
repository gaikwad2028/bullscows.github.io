import React from 'react'
import re from "./Akash_CV.pdf"
import dow from "./home.png"
export default function Resume() {

  return (
    
     <div className='resumed'>
      <img src={dow} alt="e" className='d1' data-aos="fade-right"></img>
      <a href={re} download={re}><button className='sub-1' data-aos="zoom-in-up">Download resume</button></a>
     </div>

  )
}
