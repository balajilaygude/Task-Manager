import React from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosCheckboxOutline } from "react-icons/io";

export default function Pending({data,deleteTask,completeTask}) {

  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-9/10 m-2 border bg-red-200/20 border-black flex justify-center items-center gap-5 px-3 py-4'>
         {<div className='w-full flex justify-between items-center' key={data._id}>
                <div>
                    <h1 className='text-2xl font-semibold'>{data.title}</h1>
                    <p className='text-md text-gray-600'>{data.description}</p>
                </div>
                <div className='flex justify-center items-center '>
                    <IoIosCheckboxOutline  className='text-3xl text-green-500 gap-3 hover:scale-120 hover:transition-transform' onClick={()=>completeTask(data._id)}/>
                    <MdDelete className='text-3xl text-red-500 hover:scale-120 hover:transition-transform' onClick={()=>deleteTask(data._id)}/>
                </div>
            </div>}
        </div>     
    </div>
  )
}
