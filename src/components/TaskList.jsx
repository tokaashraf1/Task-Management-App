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
    <div>TaskList</div>
  )
}

export default TaskList