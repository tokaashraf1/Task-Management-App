import React from 'react'
import { useSelector } from 'react-redux'

function TaskList() {
    const tasks = useSelector((state)=>state.tasks.tasks)
    const loading = useSelector((state)=>state.tasks.loading)
    const error = useSelector((state)=>state.tasks.error)
    if (loading){
        <p>
         Tasks Loading....</p>
    }
    if(error)
    {
    <p>There is an error {error}</p>
    }
  return (
    <div>
<h2>Tasks</h2>
<ul>
    {tasks.map((task)=>(
       <li>
        <div>
            <p>{task.title}</p>
            <p>{task.description&& <p>{task.description}</p>}</p>
            <p>Status:{task.status}</p>
        </div>
        <div>
            <button>edit</button>
            <button>delete</button>
        </div>
       </li>
    ))}
</ul>
    </div>
  )
}

export default TaskList