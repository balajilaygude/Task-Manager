import React from 'react'
import { MdDelete } from "react-icons/md";

export default function Complete({data,deleteTask}) {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-9/10 m-2 border border-black flex justify-center items-center gap-5 px-3 py-4'>
            {<div className='w-full flex justify-between items-center' key={data._id}>
                <div>
                    <h1 className='text-2xl font-semibold'>{data.title}</h1>
                    <p className='text-md text-gray-600'>{data.description}</p>
                </div>
                <MdDelete className='text-3xl text-red-500' onClick={()=>deleteTask(data._id)}/>
            </div>}
        </div>     
    </div>
  )
}
