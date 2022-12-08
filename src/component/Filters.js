import React, { useState } from 'react'
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { clearCompletedTodo, filterTodo, resetTodo } from '../redux-features/actions/actions';

const Filters = () => {
  const dispatch = useDispatch()

  return (
    <div style={{backgroundColor:"white"}}>
             <div className="TagsClass">
        <span className="filters">Filters</span>
        <button className="taskType" id="All"
        onClick={(e) => dispatch(filterTodo(e.target.id))}
        >
          <svg className="circle colorAll">
            <span ></span>
          </svg>
         All Tasks
         </button>

         <button className="taskType" id="Active"
          onClick={(e)=> dispatch(filterTodo(e.target.id))}
         >
          <svg className="circle colorHome">
            <span ></span>
          </svg>
         Active
         </button>

         <button className="taskType"  id="Completed"
         onClick={(e)=> dispatch(filterTodo(e.target.id))}
         >
          <svg className="circle colorWork">
            <span ></span>
          </svg>
         Completed
         </button>

         <button className="taskType" id="ClearCompleted"
        onClick={()=> dispatch(clearCompletedTodo())}
        >
          <svg className="circle colorSchool">
            <span ></span>
          </svg>
         Clear Completed
         </button>

         <button className="taskType" id="Reset" 
        onClick={(e)=>dispatch(resetTodo())}
        >
          <svg className="circle colorReset">
            <span ></span>
          </svg>
          Reset
         </button>
       </div>

    </div>
  )
}

export default Filters