import React from 'react'
import logo from '../Sidebar/SidebarImages/empty.png';
import { Link } from 'react-router-dom';
import {FaHome,FaPhoneAlt,FaRegBuilding,FaUserPlus} from 'react-icons/fa';
import{LuFileCheck2} from 'react-icons/lu';
import {BiBook} from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className=''>
        <div className=' bg-greenbg flex flex-col w-[15%] py-5 absolute h-screen text-white text-lg'>
            <img src={logo} alt="Logo" className=' w-32 h-14'/>
            <p className=' w-full bg-white h-[1px] mt-4'></p>
            <div className=' w-full'><Link to={`/`}><p className=' py-5 flex justify-start pl-3 items-center gap-5 hover:bg-yellow'><FaHome/>Home</p></Link></div>
            <div className=' w-full'><Link to={`/institute`}><p className=' py-5 flex justify-start pl-3 items-center gap-5 hover:bg-yellow'><FaRegBuilding/> Institutes</p></Link></div>
            <div className=' w-full'><Link to={`/admins`}><p className=' py-5 flex justify-start pl-3 items-center gap-5 hover:bg-yellow'><FaUserPlus/>Admins</p></Link></div>
            <div className=' w-full'><Link to={`/reports`}><p className=' py-5 flex justify-start pl-3 items-center gap-5 hover:bg-yellow'><LuFileCheck2/>Reports</p></Link></div>
            <div className=' w-full'><Link to={`/elibrary`}><p className=' py-5 flex justify-start pl-3 items-center gap-5 hover:bg-yellow'><BiBook/>E-Library</p></Link></div>
            <div className=' w-full'><Link to={`/support`}><p className=' py-5 flex justify-start pl-3 items-center gap-5 hover:bg-yellow'><FaPhoneAlt/> Support</p></Link></div>
        </div>
        
    </div>
  )
}

export default Sidebar;