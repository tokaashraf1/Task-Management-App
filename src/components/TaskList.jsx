import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchTodo } from '../redux-toolkit/slices/taskSlice'

function TaskList() {
    const tasks = useSelector((state)=>state.tasks.tasks)
    const loading = useSelector((state)=>state.tasks.loading)
    const error = useSelector((state)=>state.tasks.error)
    const dispatch=useDispatch()
    useEffect(()=>{
   dispatch(fetchTodo())     
    },[dispatch])

    if (loading){
       return <p> Tasks Loading....</p>
    }
    if(error)
    {
    return <p>There is an error {error}</p>
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