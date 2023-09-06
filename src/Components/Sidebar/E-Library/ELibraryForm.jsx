import React from 'react'
import Select from 'react-select';
import { Outlet } from 'react-router-dom'

const ELibraryForm = () => {

  const library = [

    { label: 'Books' },
    { label: 'Journal Articles' },
    { label: 'Documents' },
    { label: 'Videos' },
    { label: 'AR Videos' },
    { label: 'VR Videos' }
  
  ];
  const placeholderlibrary = 'Library Category';

  const keywords = [

    { label: 'one' },
    { label: 'two' },
    { label: 'three' },
    { label: 'four' }
  
  ];

  const placeholderkeyword = 'Keyword';

  return (
    <div className='absolute left-[15%] translate-y-[8%] rounded-lg h-[75%] w-[80%] px-64'>

      <input type="file" name="pfp" accept="image/*" className='rounded-full my-3 h-36 w-36 text-transparent bg-transparent bg-opacity-0 object-none border-greenbg border-2 cursor-pointer' />

      <form className='grid grid-cols-2 translate-y-[10%] '>

        <div className=' border-greenbg outline-greenbg mx-2 mt-2 w-[70%]'>
        <Select 
          options={library} 
          placeholder={placeholderlibrary}
        />
        </div>

      <input type="text" placeholder='Course Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-[70%] h-2 my-2 mx-5 rounded-md'/>
      <input type="text" placeholder='Title' required className='p-5 bg-gray-100 border-greenbg border-2 w-[70%] h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Author Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-[70%] h-2 my-2 mx-5 rounded-md'/>

      <textarea rows="1" cols="5" placeholder='Description' className='pt-2 pb-8 pl-4 bg-gray-100 border-greenbg border-2 w-[70%] h-2 my-2 mx-2 rounded-md'/>

      <div className=' border-greenbg outline-greenbg mx-5 mt-2 w-[70%]'>
        <Select 
          options={keywords} 
          placeholder={placeholderkeyword}
        />
        </div>

      <input type="url" placeholder='External Links' required className='p-5 bg-gray-100 border-greenbg border-2 w-[70%] h-2 my-2 mx-2 rounded-md'/>
      <div></div>

      
      <div className='flex justify-center w-[200%] my-5'>
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 text-sm w-32 my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Reset</button> 
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 text-sm w-32 my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Submit</button> 
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 text-sm w-32 my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Submit & Add</button> 
        </div>
      

      </form>

        <Outlet/>
    </div>
  )
}

export default ELibraryForm