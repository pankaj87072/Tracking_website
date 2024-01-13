import React from 'react'
// import Sidebar from '../../compnents/Sidebar'
import Navbar from '../../compnents/Navbar'
import AllProjects from '../../compnents/AllProjects';
import AllMember from '../../compnents/AllMember';
import ProjectGraph from '../../compnents/ProjectGraph';
import Sidebars from '../../compnents/Sidebars';

  const Homepage = () => {
    return (
      <>
        <div className='flex flex-col h-fit bg-gray-300 w-full'>
          <Navbar isHomePage={true} pageTitle={"Dashboard"} />
          <div className='mainpart flex flex-row w-full bg-gray-100 h-[45rem] '>
            <div className='relative w-[10%] h-full'>
              <div className='h-full absolute -top-8'>
                <Sidebars />
              </div>
            </div>
            <div className='flex flex-row w-[90%] relative'>
              <div className='flex flex-col mx-10 w-[66%] items-center absolute -top-10'>
                <AllProjects />
                <AllMember />
              </div>
              <div className='w-[25%] flex flex-col m-2 absolute -top-12 left-[72%]'>
                <ProjectGraph />
                <ProjectGraph />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Homepage;