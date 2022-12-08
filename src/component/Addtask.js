import React, { useState } from "react";
import '../App.css';
import { addTodo, toggleTodo } from '../redux-features/actions/actions';
import {useDispatch} from "react-redux"
import {v4 as uuid4} from "uuid"

const Addtask = () => {
const [inputTask, setInputTask] = useState("")
const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className='todo'>
       
        <div className="task-list">
        <div className="task-form">
          <div className="task-input">
            <input 
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value) } 
            type="text" 
            placeholder="What do you need to do?" />
          {console.log('inputTask before click', inputTask)}
          </div>
           
          <button 
          onClick={()=> {dispatch(addTodo({
                  id: uuid4(),  
                  content: inputTask,
                  done: false,
                })); setInputTask("")}} 
          className="task-add-button">
            <svg viewBox="0 0 40 40">
              <path d="M10 20 L30 20 M20 10 L20 30" />
            </svg>
          </button>

        </div>
        </div>
      </div>
    </div>
  );
}


export default Addtask