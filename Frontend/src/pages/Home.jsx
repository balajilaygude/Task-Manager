import React, { useEffect, useState } from "react";
import Complete from "../components/Complete";
import Pending from "../components/Pending";
import axios from "axios";
import Task from "../components/Task";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const penTask=tasks.filter((task)=>!task.isComplete)
  const comTask=tasks.filter((task)=>task.isComplete)

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
      const delMsg = await axios.delete(`http://localhost:3000/api/task/${id}`);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  }
  async function completeTask(id) {
    try {
      const updateMsg = await axios.put(
        `http://localhost:3000/api/task/${id}`,
        { isComplete: true },
      );
      fetchTask();
    } catch (error) {
      console.log(error);
    }
  }
  async function AddTask(task, description) { 
    try {
      const addMsg = await axios.post("http://localhost:3000/api/task", {
        title: task,
        description: description,
      });
      console.log(addMsg);
      fetchTask();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <div className="w-full">
      <Task AddTask={AddTask} />
      <div className="m-2 shadow-md shadow-gray-300 flex sm:flex-row flex-col justify-evenly items-start ">
        <div className="sm:w-2/5 w-full">
          <h1 className="text-3xl font-semibold text-center m-2 p-5 text-shadow-md text-shadow-red-200">
            Pending Task
          </h1>
          {penTask.map(
            (task) =>
                <Pending
                  data={task}
                  key={task._id}
                  deleteTask={deleteTask}
                  completeTask={completeTask}
                />
          )}
        </div>
        <div className="sm:w-2/5 w-full">
          <h1 className="text-3xl font-semibold text-center m-2 p-5 text-shadow-md text-shadow-green-200">
            Complete Task
          </h1>

          {comTask.map(
            (task, index) =>
                <Complete data={task} key={task._id} deleteTask={deleteTask} />
          )}
        </div>
      </div>
    </div>
  );
}
