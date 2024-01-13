import { Divider } from '@mui/material';
import React from 'react'

const AllMember = () => {
  return (
    <div className='maincontainer border border-gray-200 rounded-md h-80 w-11/12 m-2 bg-white shadow-md'>
    <div className='heading font-bold from-neutral-100 font-serif m-3'>All Members</div>
    <Divider/>
    <div className='headingpart flex flex-row justify-between m-1 border border-gray-200 rounded-md'>
    <div className='Name w-1/3 m-3'>Name</div>
    <div className='TodayProgress w-1/3 m-3 text-center'>Today's Progress</div>
    <div className='status w-1/3 m-3 text-center'>Status</div>
    </div>
    <div className='showing-list   m-1 border border-gray-200 rounded-md h-52'>
        <div className='flex flex-row justify-between'>
    <div className='names w-1/3 m-3 '>Rahul Alahmdullah</div>
    <div className='Progress w-1/3 m-3 text-center'>3/4-------</div>
    <div className='Stautsdetail w-1/3 m-3 text-center text-green-500 flex flex-row justify-center'><div className='w-2 h-2 border rounded-lg bg-green-600 m-2'></div>Completed</div>
    </div>
     </div>
    </div>
  )
}

export default AllMember;
