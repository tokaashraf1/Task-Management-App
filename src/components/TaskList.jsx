import React from 'react'
import { useSelector } from 'react-redux'

function TaskList() {
    const tasks = useSelector((state)=>state.tasks.tasks)
  return (
    <div>TaskList</div>
  )
}

export default TaskList