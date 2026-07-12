import React from 'react'
import { BsListTask } from "react-icons/bs";
import { SiZcool } from "react-icons/si";

export default function Navbar() {


  return (
    <div className='w-full'>
      <div className='m-2 h-24 py-2 sm:py-0 gap-2 shadow-md shadow-gray-300 sm:flex-row flex flex-col justify-between items-center'>
        <div className='flex sm:px-8  gap-3 items-center justify-center'>
            <BsListTask className='text-4xl'/>
            <div className='flex justify-center items-center'>
            <p className='text-3xl font-bold'>Task Manager</p>
            </div>
        </div>
        <div className='flex sm:px-10 gap-5 items-center justify-center'>
            <p>Go Complete Your Task</p>
            <SiZcool className='text-4xl'/>
        </div>
      </div>
    </div>
  )
}
