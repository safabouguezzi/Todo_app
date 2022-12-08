import React from 'react'
import Task from './Task'

import 'bootstrap/dist/css/bootstrap.min.css';



const ListTask = ({tasks}) => {


console.log("tasks from redux:", tasks)

  return (
    <div>
      {tasks.map((task, key) => <Task  task={task} key={key} 
      />)}
    </div>
  )
}


export default ListTask