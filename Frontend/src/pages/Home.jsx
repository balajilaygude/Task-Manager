import React, { useEffect, useState } from "react";
import Complete from "../components/Complete";
import Pending from "../components/Pending";
import axios from 'axios'

export default function Home() {
  const [tasks, setTasks] = useState([]);
  async function fetchTask() {
    try {
      const res = await fetch("http://localhost:3000/api/task");
      const result = await res.json();
      setTasks(result.tasks);
    } catch (error) {
      console.log(error);
    }
  }
      async function deleteTask(id) {
        try {
            console.log(id)
            const delMsg= await axios.delete(`http://localhost:3000/api/task/${id}`)
            console.log(delMsg)
            setTasks(prev => prev.filter(task => task._id !== id));
        } catch (error) {
            console.log(error)
        }
    }
    async function completeTask(id) {
        
    }
  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <div className="w-screen">
      <div className="m-2 shadow-md shadow-gray-300 flex justify-between">
        <div className="w-3/6 ">
        <h1 className="text-3xl font-semibold text-center m-2 p-5 text-shadow-md text-shadow-red-200">Pending Task</h1>
          {tasks.map(
            (task, index) =>
              !task.isComplete && <Pending data={task} key={task._id} deleteTask={deleteTask}/>,
          )}
        </div>
        <div className="w-3/6">
        <h1 className="text-3xl font-semibold text-center m-2 p-5 text-shadow-md text-shadow-green-200">Complete Task</h1>
          
          {tasks.map(
            (task, index) =>
              task.isComplete && <Complete data={task} key={task._id} deleteTask={deleteTask}/>,
          )}
        </div>
      </div>
    </div>
  );
}
