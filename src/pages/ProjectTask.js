import React from 'react';
import Navbar from '../compnents/Navbar';
import Taskadminpanel from '../compnents/Taskadminpanel';
// import { useState } from 'react';
// import { FaBars } from 'react-icons/fa'; // Import hamburger icon from react-icons
import Sidebars from '../compnents/Sidebars';
import { FaSearch } from 'react-icons/fa';
import { Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

// import { Link } from 'react-router-dom';


const ProjectTask = () => {
  return (
    <div className={`maincontainer h-full`}>
      <Navbar pageTitle={"Project Task"} />
      <div className='h-full flex flex-row'>
        <div className='h-screen'>
          <Sidebars />
        </div>
        <div className='flex flex-col w-[90%] m-2'>
          <div className='ml-4 mb-6 flex flex-row justify-between '>
            <div className='border rounded-md ml-6 h-18 flex items-center'>
              <FaSearch className='ml-2 text-gray-500' />
              <input
                type='text'
                placeholder={`Search`}
                className='m-1 ml-2 align-middle border-none outline-none'
              />
            </div>
              <Button variant="contained" color="primary" className='mr-6 m-1 p-1 w-20 h-10 '>
                Create
              </Button>
          </div>
          <div className={`flex flex-row flex-wrap`}>
            {/* Assuming Taskadminpanel represents tasks in a project */}
           <Link to='/project/1'><Taskadminpanel /></Link> 
            <Taskadminpanel />
            <Taskadminpanel />
            <Taskadminpanel />
            <Taskadminpanel />
            <Taskadminpanel />
            <Taskadminpanel />
            <Taskadminpanel />
          </div>
        </div>
      </div> 
      <Outlet/>
    </div>
   
  );
  
};

export default ProjectTask;