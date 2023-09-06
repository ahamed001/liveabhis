import React from 'react'
import { Outlet } from 'react-router-dom';     


const AdminForm = () => {
  return (      
    
    <div className='absolute left-[15%] translate-y-[10%] rounded-lg h-[75vh] w-[85%] px-64'>

      <input type="file" name="pfp" accept="image/*" className='rounded-full my-3 h-36 w-36 text-transparent bg-transparent bg-opacity-0 object-none border-greenbg border-2 cursor-pointer' />

      <form className='grid grid-cols-3 translate-y-[10%]'>

    <input type="text" placeholder='Institute Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
    <input type="email" placeholder='Email ID' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-5 rounded-md'/>
    <input type="password" placeholder='Password Generator' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-8 rounded-md'/>
    <input type="tel" placeholder='Mobile Number' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

    <div className='flex justify-around items-center h-[72%] my-2 mx-5 px-2 w-full border-[2px] border-greenbg rounded-md'>

      <frameElement className="mx-3">Institutes</frameElement>

      <div>
      <frameElement className="mx-1 font-semibold text-xs">Add</frameElement>
      <label className="relative inline-flex items-center cursor-pointer">
      
        <input type="checkbox" className="sr-only peer" />
        <div className="w-7 h-3 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"/>
      </label> 
      </div>
      
      <div>
      <frameElement className="mx-1 font-semibold text-xs">Edit</frameElement>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-7 h-3 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"/>
      </label>
      </div>

      <div>
      <frameElement className="mx-1 font-semibold text-xs">Delete</frameElement>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-7 h-3 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"/>
      </label>
      </div>

    </div>  

    <div className='flex justify-around items-center h-[72%] my-2 mx-8 px-2 w-full border-[2px] border-greenbg rounded-md'>

    <frameElement className="mx-3">Report Generation</frameElement>
      <label className="relative inline-flex items-center cursor-pointer">
      
        <input type="checkbox" className="sr-only peer" />
        <div className="w-7 h-3 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-greenbg"/>
      </label>

    </div>
      
      
    <div className='flex items-center w-[300%] justify-center mt-3 '>
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 text-sm w-32 my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Reset</button> 
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 text-sm w-32 my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Submit</button> 
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 text-sm w-32 my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Submit & Add</button> 
    </div>


    </form>
        <Outlet/>
    </div>
  )
}

export default AdminForm