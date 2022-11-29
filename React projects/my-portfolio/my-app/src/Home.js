import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
import pic2 from  "./ColorlessBitesizedKob-max-1mb.gif";
export default function Home() {
  return (
    <>
   
    <div className='home'>
      <div className='himage'><img src={pic2} alt="aa" className='dds'></img></div>
     <div className='intro' >
      <div className='intro-2'data-aos="zoom-out-down">
      <div className='my-intro'>
         <div className="main">Hello, I AM </div>
         <div className='dev-1'><p className='dev'>AKASH</p></div>
      </div>
      <p className="HH">I,am learning Front-end Development Javascript, Css ,Reactjs,Next-js,Figma</p>
      </div>
      <div className='follow' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"><a href='https://www.linkedin.com/in/gaikwad-akash-4a9b7120a/' className='linkdin'><FaLinkedin size="md" className='linkdin-2'  /></a><a href='/' className='linkdin'><FaInstagram  className='linkdin-2'  size="md" /></a></div>
    </div>
    </div>
  
    </>
  )
}
