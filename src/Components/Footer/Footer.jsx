import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, } from 'react-icons/fa'

const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <div>
        <div className='flex justify-around pl-24 py-2 absolute bottom-[-3%] w-[100%] cursor-default'>
          
            <p className=' text-green'>V1.0.1 Copyright &copy; {year} Abhis </p>
            
            <div></div>

          <div className='flex justify-evenly'>
            <FaFacebook className='text-gray-900 text-2xl mx-3 hover:text-[#1877F2] cursor-pointer'/>
            <FaInstagram className='text-gray-900 text-2xl mx-3 hover:text-[#FF008C] cursor-pointer'/>
            <FaWhatsapp className='text-gray-900 text-2xl mx-3 hover:text-[#128c7e] cursor-pointer'/>
            <FaLinkedin className='text-gray-900 text-2xl mx-3 hover:text-[#0072b1] cursor-pointer'/>
          </div>
        </div>
    </div>
  )
}

export default Footer