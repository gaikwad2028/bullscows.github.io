import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImHome,ImInfo } from "react-icons/im";
import { FaProductHunt,FaPager,FaInfoCircle} from "react-icons/fa";
export default function Hamlinks() {
  return (
    <div className='hum'>
     <NavLink to='/' className="nav-12"><ImHome className='show'></ImHome>Home</NavLink >
     <NavLink  to='/about'  className="nav-12"><ImInfo className='show'></ImInfo>About</NavLink >
     <NavLink to='/projects'  className="nav-12"><FaProductHunt className='show'></FaProductHunt>Projects</NavLink >
     <NavLink to='/resume'  className="nav-12"><FaPager className='show'></FaPager>Resume</NavLink >
     <NavLink to='/Contact'  className="nav-12"><FaInfoCircle className='show'></FaInfoCircle>Contact</NavLink >
    </div>
  )
}