import React from 'react';
import { Divider } from '@mui/material';
import Dropdown from './Dropdown';

const AllProjects = () => {
  return (
    <div className='maincontainer border border-gray-200 rounded-md h-80 w-4/5 m-2 bg-white '>
      <div className='heading font-bold from-neutral-100 font-serif m-3'>All Projects</div>
      <Divider />
      <div className='show-and-search flex flex-row justify-between items-center h-13'>
        <div className='show m-3'>Show<Dropdown /></div>
        <div className='search m-3'>
          Search <input type='text' className='border p-2 rounded' placeholder='Search projects' />
        </div>
      </div>
      <Divider />
      <div className='headingdetail flex flex-row bg-blue-50'>
        <div className='project m-3 w-1/3'>Project</div>
        <div className='progress m-3 w-1/3 text-center'>Progress</div>
        <div className='team m-3 w-1/3 text-center'>Team-Member</div>
      </div>
      <Divider />
      <div className='container-of-list flex flex-row justify-between'>
        <div className='projectname m-3 w-1/3'>Design and Develop</div>
        <div className='stats m-3 w-1/3 text-center'><span>3/4</span>----</div>
        <div className='teammember m-3 w-1/3 text-center'>4 People</div>
      </div>
      <Divider />
      <div className='container-of-list flex flex-row justify-between'>
        <div className='projectname m-3 w-1/3'>Design and Develop</div>
        <div className='stats m-3 w-1/3 text-center'><span>3/4</span>----</div>
        <div className='teammember m-3 w-1/3 text-center'>4 People</div>
      </div>
      <Divider />
      <div className='footer flex flex-row justify-center m-3 p-2'>
        <div className='hover:text-blue-400 cursor-pointer'>Prev</div>
        <div className='border border-gray-200 rounded-lg w-8 text-center mx-3 hover:bg-blue-400 hover:text-white'>1</div>
        <div className='hover:text-blue-400 cursor-pointer'>Next</div>
      </div>
    </div>
  );
};

export default AllProjects;
