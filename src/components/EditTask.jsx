import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


function EditTask({task}) {
     const[isEdit,setTIsEdit]=useState(false)
       const[title,setTitle]=useState(task.title)
       const[description,setDescription]=useState(task.description)
       const[status,setStatus]=useState(task.status)
         const dispatch= useDispatch()
  return (
    <div>
        {isEdit?
        (
            <div className='absolute bg-white p-6 px-11 border rounded-md shadow-lg z-10 '>
                <h2 className="text-xl font-semibold mb-3 text-indigo-500 ">
          Edit Task
        </h2>
        <div className="mb-4">
          <input
            type="text"
            value={title}
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
       <div className='flex justify-between'>
         <button
           type="submit"
           className=" bg-indigo-600 text-white py-2 px-2 rounded-md hover:bg-indigo-700"
         >
          Edit
         </button>
         <button className='bg-gray-300 py-2 rounded-md px-2 hover:bg-gray-500'
          onClick={()=>setTIsEdit(false)}
         >
            Cancel
         </button>
       </div>
            </div>
        ):(
     
       <button className='px-3 py-1 bg-blue-500 text-white rounded-md px-2 hover:bg-blue-700 '
       onClick={()=>setTIsEdit(true)}
       >Edit</button> 
        )}
    </div>
  )
}

export default EditTask