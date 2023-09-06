import React, { useState, useEffect } from 'react';
import { Country, State } from "country-state-city";
import Select from 'react-select';
import { Outlet } from 'react-router-dom'
import { FaVrCardboard } from 'react-icons/fa';

const InstituteForm = () => {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);

  const placeholdercountry = 'Country';
  const placeholderstate = 'State';

  const [branchcount, setbranchcount] = useState(0);
  const [studentcount, setstudentcount] = useState(0);
  const [facultycount, setfacultycount] = useState(0);
  const [cloudcount, setcloudcount] = useState(0);

  const incountbranch = () => {
    setbranchcount(branchcount + 1);
  };

  const incountstudent = () => {
    setstudentcount(studentcount + 1);
  };

  const incountfaculty = () => {
    setfacultycount(facultycount + 1);
  };

  const incountcloud = () => {
    setcloudcount(cloudcount + 1);
  };

  const decountbranch = () => {
    if (branchcount > 0) {
    setbranchcount(branchcount - 1);
  }
  };

  const decountstudent = () => {
    if (studentcount > 0) {
    setstudentcount(studentcount - 1);
  }
  };

  const decountfaculty = () => {
    if (facultycount > 0) {
    setfacultycount(facultycount - 1);
  }
  };

  const decountcloud = () => {
    if (cloudcount > 0) {
    setcloudcount(cloudcount - 1);
  }
  };

  const inputchangebranch = (e) => {

    const newValue = parseInt(e.target.value, 10);

    if (!isNaN(newValue)) {
      setbranchcount(newValue);
    }
  };
  
  const inputchangestudent = (e) => {

    const newValue = parseInt(e.target.value, 10);

    if (!isNaN(newValue)) {
      setstudentcount(newValue);
    }
  };
  
  const inputchangefaculty = (e) => {

  const newValue = parseInt(e.target.value, 10);

  if (!isNaN(newValue)) {
    setfacultycount(newValue);
  }
  };

  const inputchangecloud = (e) => {

  const newValue = parseInt(e.target.value, 10);

  if (!isNaN(newValue)) {
    setcloudcount(newValue);
  }
  };

  const options = [

    { label: 'School' },
    { label: 'College' },
    { label: 'Private Institute' },
  
  ];

  const placeholderinstitute = 'Institute Type';

  return (
 
    <div className='absolute w-[85%] left-[15%] translate-y-[2%] h-[80vh] overflow-y-scroll rounded-lg px-64'>
        
    <input type="file" name="pfp" accept="image/*" className='rounded-full my-3 h-36 w-36 text-transparent bg-transparent bg-opacity-0 object-none border-greenbg border-2 cursor-pointer' />

    <form className='grid grid-cols-3'>
    
      <input type="text" placeholder='Institute ID' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Institute Name' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-5 rounded-md'/>
      
      <div className=' border-greenbg outline-greenbg ml-8 mr-2 mt-2 w-full'>
        <Select 
          options={options} 
          placeholder={placeholderinstitute}
        />
      </div>
      
      <input type="text" placeholder='Landline Number' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Landline Number' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-5 rounded-md'/>
      <input type="email" placeholder='Email ID' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-8 rounded-md'/>
      <input type="password" placeholder='Password Generator' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Address Line 1' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-5 rounded-md'/>
      <input type="text" placeholder='Address Line 2' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-8 rounded-md'/>
      <input type="text" placeholder='Area' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>
      <input type="text" placeholder='Pin Code' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-5 rounded-md'/>

      <div className='flex w-[113%]'>
      <div className=' border-greenbg outline-greenbg ml-8 mt-2 w-full'>
      <Select
        options={Country.getAllCountries()}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedCountry}
        onChange={(item) => {
          setSelectedCountry(item);
        }}
        placeholder={placeholdercountry}
      />
      </div>

      <div className=' border-greenbg outline-greenbg ml-2 mt-2 w-full'>
      <Select
        options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedState}
        onChange={(item) => {
          setSelectedState(item);
        }}
        placeholder={placeholderstate}
      />
      </div>

      </div>
      
      <input type="text" placeholder='State' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-2 rounded-md'/>

      <input type="text" placeholder='District' required className='p-5 bg-gray-100 border-greenbg border-2 w-full h-2 my-2 mx-5 rounded-md'/>

      <div className='h-10 w-full mt-2 ml-8 rounded-lg flex justify-around items-center border-[2px] border-greenbg'>

        <p>branches</p>
      
      <button onClick={decountbranch} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={branchcount}
        onChange={inputchangebranch}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      <button onClick={incountbranch}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>
      
      </div>
      
      <div className='h-10 w-full mt-2 ml-2 rounded-lg flex justify-around items-center border-[2px] border-greenbg'>

        <p>students</p>
      
      <button onClick={decountstudent} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={studentcount}
        onChange={inputchangestudent}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      <button onClick={incountstudent}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>
      
      </div>
      
      <div className='h-10 w-full mt-2 ml-5 rounded-lg flex justify-around items-center border-[2px] border-greenbg'>

        <p>faculty</p>
      
      <button onClick={decountfaculty} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={facultycount}
        onChange={inputchangefaculty}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      <button onClick={incountfaculty}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>
      
      </div>

      <div className='h-10 w-full mt-2 ml-8 rounded-lg flex justify-around items-center border-[2px] border-greenbg'>

        <p>cloud</p>
      
      <button onClick={decountcloud} className=' w-5 h-5 text-5xl mb-10 text-center'>-</button>

      <input
        type="text"
        value={cloudcount}
        onChange={inputchangecloud}
        style={{ width: '40px', height:'30px', background:'#E5E4E2', textAlign: 'center' }}
      />

      <button onClick={incountcloud}className=' w-5 h-5 text-4xl mb-8 text-center'>+</button>
      
      </div>

      <div className='flex'>
      <div className='my-4 mx-4 px-6 w-20'>
      <FaVrCardboard className=' text-3xl'/>
      </div>
        
      <div className="relative cursor-pointer w-20 justify-around p-1 my-4">
  
        <label>
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 peer-focus:outline-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[7px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#53D769]"/>
        </label>

      </div>
      </div>

      <div></div>
      <div></div>
      
      <div className='flex justify-center w-[300%]'>
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 text-sm w-32 my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Reset</button> 
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 text-sm w-32 my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Submit</button> 
        <button className='p-2 bg-greenbg text-white border-greenbg border-2 text-sm w-32 my-2 mx-2 rounded-md border-none outline-none hover:bg-yellow'>Submit & Add</button> 
      </div>

      </form>

  <Outlet/>

    </div>
  )
}

export default InstituteForm