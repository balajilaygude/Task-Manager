import React from 'react'

export default function Task() {
  return (
    <div className='w-screen'>
        <div className='m-2 shadow-md shadow-gray-300 flex justify-evenly items-center'>
            <form >
                <input type="text" required placeholder='Task name'/>
                <input type="text" required placeholder='Description'/>
                <button>Add Task</button>
            </form>
        </div>
        
    </div>
  )
}
