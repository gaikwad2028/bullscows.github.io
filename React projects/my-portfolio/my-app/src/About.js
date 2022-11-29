import React from 'react'
import { GiDirectionSign } from "react-icons/gi"
import { DiJavascript,DiCss3,DiHtml5 } from "react-icons/di";
import { TbBrandNextjs} from "react-icons/tb"
import { FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import pic from "./react.webp"
export default function About() {
  return (
    <div className='About'>
      <div className='ab-1'>
      <div className='imgs'> <img src={pic} alt="l" className='fa'></img></div>
      <div className='head'>
        <h1 className='About1'>About</h1>
        <p className='spech'>My Name is <strong>Akash Naresh Gaikwad</strong>I am from <strong>  Mumbai, Maharshtra.</strong> <br />
        I graduated from <strong>B.R. Harne College Of Engineering and Technology</strong>
        </p><br />
        <div className='hobbies'>
        <p className='apart'>Apart from coding, some other activities that I love to do!</p>
        <p className='ic'> <GiDirectionSign className='dir'></GiDirectionSign> Playing cricket</p>
        <p className='ic'> <GiDirectionSign className='dir'></GiDirectionSign> Traveling</p>
        <p className='ic'><GiDirectionSign className='dir'></GiDirectionSign> Bike riding</p>
        </div>
        </div>
        </div>
        <h1 className='set'>Technical skill of set</h1>
        <div className='skills'>
        <DiJavascript className='nice' size="md"></DiJavascript>
         <DiCss3 className='nice' size="md"></DiCss3>
        <DiHtml5 className='nice' size="md"></DiHtml5>
         <TbBrandNextjs className='nice' size="md"></TbBrandNextjs>
        <FaReact className='nice' size="md"></FaReact>
      </div>
      <h1 className='set'>Tools i Used</h1>
      <div className='skills'>
        <BsGithub className='nice' size="md"></BsGithub>
        <SiNetlify className='nice' size="md"></SiNetlify>
      </div>
    </div>
  )
}
