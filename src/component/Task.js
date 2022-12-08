import React, { useEffect, useState } from "react";
import "./checkbutton.css";
import "../App.css";
import {v4 as uuid4} from "uuid"
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo, updateTodo } from "../redux-features/actions/actions";

const Task = ({task }) => {
  const [editable, setEditable] = useState(false)
  const [inputTask, setInputTask] = useState(task.content)
  const dispatch = useDispatch()


  return (
    <div>
      <div className="todo">
        <div className="task-list">
          <div className="task-form">
            <div className="task-container">
              <div className="checkbox-wrapper-11">
                <input 
                onClick={(e)=> dispatch(toggleTodo(task.id))}
                id="02-11" type="checkbox" name=" " checked={task.done} onChange={()=> {}}/>
                <label >
                  {
                    editable ? 
                    <input type="text" value={inputTask} onChange={(e)=>setInputTask(e.target.value)}/>
                    :
                    task.content
                  }
                  </label>
              </div>
              <div className="task-container">

                <button 
                onClick={() =>{dispatch(updateTodo({id:task.id, content:inputTask})); setEditable(!editable)}}
                className="task-item-edit">
                  <svg
                  
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#5C3DF5"
                    className="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                  </svg>
                </button>

                <button 
                onClick={()=>dispatch(deleteTodo(task.id))}
                className="task-item-remove">
                  <svg viewBox="0 0 40 40">
                    <path d="M15 15 L25 25 M25 15 L15 25"></path>
                  </svg>
                </button>
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};


export default Task;


