import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {v4 as uuid4} from "uuid"

function AddTask() {
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  const[status,setStatus]=useState("")
  const dispatch= useDispatch()
  const handleSubmit=(e)=>{
   e.preventDefault()

   const newTask={
    id:uuid4(),
    title,
    description,
    status,
   }
  }
  return (
    <div>
      <form className="mb-6" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-3 text-indigo-500 ">
          Add New Task
        </h2>
        <div className="mb-4">
          <input
            type="text"
            value="title"
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Task Title"
            className=" w-full px-3 py-2 border rounded-md foucs:outline-none foucs:ring-2 "
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Task Description"
            value={description}
            className="w-full px-3 py-2 border rounded-md foucs:outline-none foucs:ring-2 "
            onChange={(e)=>setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <select className="w-full px-3 py-2 border rounded-md foucs:outline-none foucs:ring-2 "
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
