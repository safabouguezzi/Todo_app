import {v4 as uuid4} from "uuid"
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO, CLEAR_COMPLETED_TODO, RESET_TODO } from "../constants/actions-types"

const tasks = [{id: uuid4(), content:" Do Me", done: false}]



export const todo = (state = tasks, action) => {
    let newTask;
    
    switch (action.type) {

        case ADD_TODO: 
            newTask = [...state]
            newTask.push(action.payload)
            return newTask;

        case TOGGLE_TODO:
            newTask = [...state]
            newTask.map( task => task.id === action.payload  ? task.done= ! task.done : task)
            
            return newTask

        case DELETE_TODO:
            newTask = [...state]
            return newTask.filter(task => task.id !== action.payload )

        case UPDATE_TODO:
            newTask = [...state]
            return newTask.map(task => task.id=== action.payload.id ? {...task, content: action.payload.content} : task )
        
        case CLEAR_COMPLETED_TODO:
            newTask = [...state]
            console.log('ClearComplete: ', newTask.filter(task => task.done !== true ))
            return newTask.filter(task => task.done !== true )

        case RESET_TODO:
            newTask = [{id: uuid4(), content:" Do Me", done: false}]
            console.log('reset: ', newTask)
            return newTask
    
        default: return state

    }
}

