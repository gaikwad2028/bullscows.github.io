import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import {FaInstagram,FaRegCopyright } from 'react-icons/fa';
import { BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <div className='foot'>
        <p className='web'>Design and develop by Akash Gaikwad</p>
        <p className='con'><FaRegCopyright className='copy'></FaRegCopyright> Copyright 2022</p>
        <p className='f1'>
        <FaLinkedin size="md" className='web-1'></FaLinkedin>
        <FaInstagram size="md" className='web-1'></FaInstagram>
        <BsGithub size="md" className='web-1'></BsGithub>
        </p>
    </div>
  )
}
