import React from 'react'
import { NavLink } from 'react-router-dom'
import Hamlinks from './Hamlinks.js';
import { FaHamburger } from 'react-icons/fa';
import { ImHome,ImInfo } from "react-icons/im";
import { FaProductHunt,FaPager,FaInfoCircle} from "react-icons/fa";
export default function Navbar() {

  const[Show,Setshow]=React.useState(false)

  var Handelclick =(e)=>{
    Setshow(!Show)
  }

  
  console.log(Show)
  return (
    <div className='navbar'>
    <div className='content'>
     <NavLink to='/' className="nav-1"><ImHome className='show-2'></ImHome >Home</NavLink >
     <NavLink  to='/about'  className="nav-1"><ImInfo className='show-2'></ImInfo>About</NavLink >
     <NavLink to='/projects'  className="nav-1"><FaProductHunt className='show-2'></FaProductHunt>Projects</NavLink >
     <NavLink to='/resume'  className="nav-1"><FaPager className='show-2'></FaPager>Resume</NavLink >
     <NavLink to='/Contact'  className="nav-1"><FaInfoCircle className='show-2'></FaInfoCircle>Contact</NavLink >
     <div className='ham' onClick={Handelclick} data-aos="fade-left"><FaHamburger className='burger' />
     </div>
     </div>
     { Show && <Hamlinks ></Hamlinks>}
    </div>
  )
}
