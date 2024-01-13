import React from 'react';
// import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
import { IconButton,Badge } from '@mui/material';
// import Sidebar from './Sidebar';

const Navbar = ({ isHomePage,pageTitle}) => {
  const navbarHeightClass = isHomePage ? 'h-24' : 'h-14';

  return (
    <div className={`navbar relative w-full border border-solid text-white bg-[#4b5ac4] border-[#4b5ac4] ${navbarHeightClass}`}>
    <div className='navlist flex flex-row items-center justify-between w-full'>
      <div className='logo m-2 text-center text-lg font-bold w-[8%]'>TUNTUN</div>
      <div className='text-lg font-bold m-2 w-[80%] ml-12'>
        {pageTitle}</div>
        <div className='w-[10%]'>
        <ul className='flex flex-row items-center justify-end h-full m-1 pr-4'>
          <li className='pl-4 m-1'>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </li>
          <li className='m-1 border rounded-full bg-black h-10 w-10 flex items-center justify-center'>
            <IconButton color="inherit">
              <Person2Icon style={{ fontSize: 30, color: '#fff' }} />
            </IconButton>
          </li>
        </ul>
        </div>
      </div>
      

      
    </div>
  );
};

export default Navbar;