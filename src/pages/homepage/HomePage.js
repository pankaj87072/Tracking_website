import React from 'react'
// import Sidebar from '../../compnents/Sidebar'
import Navbar from '../../compnents/Navbar'
import AllProjects from '../../compnents/AllProjects';
import AllMember from '../../compnents/AllMember';
import ProjectGraph from '../../compnents/ProjectGraph';
const Homepage = () => {
  return (
    <>
    <div className=' flex flex-col h-fit bg-gray-300 '>
  <Navbar />
    <div className='mainpart  flex flex-row w-full bg-gray-100 h-[45rem] '>
    
      <div className='flex flex-row w-full  relative'>
      <div className='flex flex-col mx-10 w-8/12 items-center absolute -top-10'>
       <AllProjects  />
       <AllMember/>
    </div>
    <div className='w-1/3 flex flex-col m-2 absolute -top-12 left-[65%]' >
      <ProjectGraph/>
      <ProjectGraph/>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Homepage;