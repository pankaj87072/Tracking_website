import React from 'react';
import Navbar from '../compnents/Navbar';
import Taskadminpanel from '../compnents/Taskadminpanel';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon from react-icons


const ProjectTask = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`maincontainer h-screen ${isMenuOpen ? 'menu-open' : ''}`}>
      <Navbar />
      <div className='bg-gray-100 h-[85%] flex flex-row'>
        <div className={`Sidebar mt-1 border rounded-md ${isMenuOpen ? 'menu-open' : ''} w-${isMenuOpen?'[18%]' : '[1%]'}`} style={{ transition: 'width 0.5s ease-in-out' }}>
          <div className={`hamburger w-full h-6` }onClick={toggleMenu}>
            <FaBars />
          </div>
          {isMenuOpen && (
            <div className='menu-items'>
              <div>Dashboard</div>
              <div>
                Projects
                <ul>
                  <li>Active</li>
                  <li>Previous</li>
                </ul>
              </div>
              <div>Settings</div>
            </div>
          )}
        </div>
        <div className={`w-${isMenuOpen ? '18' : '10'}% flex flex-row flex-wrap`}>
          <Taskadminpanel />
          <Taskadminpanel />
          <Taskadminpanel />
          <Taskadminpanel />
          <Taskadminpanel />
          <Taskadminpanel />
        </div>
      </div>
    </div>
  );
};

export default ProjectTask;
