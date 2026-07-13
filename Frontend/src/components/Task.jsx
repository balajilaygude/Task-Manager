import React, { useState } from "react";
import axios from "axios";

export default function Task({ AddTask }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e){

      e.preventDefault();
      AddTask(task, description); 
      
    setTask("");
    setDescription("");
  }
  return (
    <div className="w-full">
      <form
        className="p-5 flex sm:flex-row flex-col gap-2 sm:justify-center sm:items-center  m-2 shadow-md shadow-gray-300"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:justify-center sm:items-end sm:pl-20 gap-3">
          <input
            type="text"
            required
             value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task name"
            className="outline-none border-2 border-gray-400 sm:w-120 sm:h-10 px-2 py-1 rounded-lg focus:border-black"
          />
          <input
            type="text"
            required
             value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="outline-none border-2 border-gray-400 sm:w-120 sm:h-10 px-2 py-1 rounded-lg focus:border-black"
          />
        </div>

        <button className="bg-black  text-white mx-auto w-40 h-12 rounded-2xl hover:bg-gray-800">
          Add Task
        </button>
      </form>
    </div>
  );
}
