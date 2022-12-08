import React, { useState } from 'react'
import Task from './Task'
import {Button, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid4} from "uuid"
import { addTodo, deleteTodo } from '../redux-features/actions/actions';
import { useDispatch } from 'react-redux';


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