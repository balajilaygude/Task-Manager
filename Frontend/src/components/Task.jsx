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
    <div className="w-screen">
      <form
        className="p-5 flex justify-evenly m-2 shadow-md shadow-gray-300"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <input
            type="text"
            required
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task name"
            className="outline-none border-2 border-gray-400 w-120 h-10 px-2 py-1 rounded-lg focus:border-black"
          />
          <input
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="outline-none border-2 border-gray-400 w-120 h-10 px-2 py-1 rounded-lg focus:border-black"
          />
        </div>

        <button className="bg-black text-white w-40 h-12 rounded-2xl hover:bg-gray-800">
          Add Task
        </button>
      </form>
    </div>
  );
}
