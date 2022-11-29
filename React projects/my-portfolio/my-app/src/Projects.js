import React from 'react'
import Projectitem from './Projectitem.js'
import Form from "./Data.jsx"


export default function Project(props) {
  return (
    <div className='components' >
      {
        Form.map((res,index)=>{
          return( <div className='list'data-aos="fade-up"
          data-aos-duration="3000" key={index}><Projectitem Titel={res.Name}  Des={res.description}  photo={res.Image} Go={res.link}></Projectitem></div>)
        })
      }
    </div>
  )

}