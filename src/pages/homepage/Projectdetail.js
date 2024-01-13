import React, { useState } from 'react'
import Navbar from '../../compnents/Navbar'
import { Avatar, Divider } from '@mui/material';
import Overview from '../../compnents/Overview';
import Taskinproject from '../../compnents/Taskinproject';
import Sidebars from '../../compnents/Sidebars';
import { useParams } from 'react-router-dom';
// import Sidebars from '../../compnents/Sidebars';
const Projectdetail = () => {
  const { projectId } = useParams();

  // Your existing data and state setup
  const totalMembers = [
    'url_to_member_1_avatar',
    'url_to_member_2_avatar',
    'url_to_member_3_avatar',
  ];

  const getAvatarColor = (index) => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
    return colors[index % colors.length];
  };

  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='UnderProjectsection flex flex-col min-h-screen h-fit bg-gray-100 '>
      <Navbar pageTitle={`Project ${projectId}`} />
      <div className='w-full h-full flex flex-row '>
        <div className=''><Sidebars /></div>
        <div className='w-[90%] ml-4'>
          <div className='proname h-10 w-full flex flex-row justify-between m-2'>
            <div className='name font-semibold font-serif'>Project-Name</div>
            <div className='flex items-center mr-8'>
              {totalMembers.map((member, index) => (
                <Avatar
                  key={index}
                  src={member}
                  alt={`Member ${index + 1}`}
                  sx={{
                    ml: index > 0 ? '-12px' : '0',
                    zIndex: index + 1,
                    position: 'relative',
                    backgroundColor: getAvatarColor(index),
                    border: '2px solid white',
                  }}
                />
              ))}
            </div>
          </div>
          <div className='flex m-4'>
            <div
              className={`h-3 m-2 cursor-pointer ${
                activeTab === 'overview' ? 'text-blue-500 font-semibold' : ''
              }`}
              onClick={() => handleTabChange('overview')}
            >
              Overview
            </div>
            <div
              className={`h-3 m-2 cursor-pointer ${
                activeTab === 'task' ? 'text-blue-500 font-semibold' : ''
              }`}
              onClick={() => handleTabChange('task')}
            >
              Task
            </div>
            <div
              className={`h-3 m-2 cursor-pointer ${
                activeTab === 'setting' ? 'text-blue-500 font-semibold' : ''
              }`}
              onClick={() => handleTabChange('setting')}
            >
              Setting
            </div>
          </div>
          <Divider />
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'task' && <Taskinproject />}
        </div>
      </div>
    </div>
  );
};

export default Projectdetail;