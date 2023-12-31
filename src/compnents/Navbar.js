import React from 'react';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
// import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <div className='navbar relative h-28 w-full border border-solid border-blue-800 bg-blue-800 text-white'>
      {/* <Sidebar/> */}
      <div className='navlist '>
        <ul className='flex flex-row space-x-2 float-right '>
          {/* <li><Button variant="contained">Dashboard</Button></li> */}
          {/* <li><Button variant="contained">Time Tracking</Button></li> */}
          {/* <li><Button variant="contained">Project&TM</Button></li> */}
          {/* <li><Button variant="contained">Reports&Analysis</Button></li> */}
          {/* <li><Button variant="contained">TASK</Button></li> */}
          <li><Button variant="contained"><NotificationsIcon /></Button></li>
          <li className='border border-solid rounded-md'><Person2Icon /></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
