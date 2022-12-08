import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO, CLEAR_COMPLETED_TODO, FILTER_TODO, RESET_TODO } from "../constants/actions-types"

export const addTodo =(todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export const toggleTodo =(todo) => {
    return {
        type: TOGGLE_TODO,
        payload: todo,
    }
}

export const deleteTodo =(todo) => {
    return {
        type: DELETE_TODO,
        payload: todo,
    }
}

export const updateTodo =(todo) => {
    return {
        type: UPDATE_TODO,
        payload: todo,
    }
}

export const clearCompletedTodo =() => {
    return {
        type: CLEAR_COMPLETED_TODO,
        // payload: todo,
    }
}

export const resetTodo =() => {
    return {
        type: RESET_TODO,
        // payload: todo,
    }
}

export const filterTodo =(todo) => {
    return {
        type: FILTER_TODO,
        payload: todo,
    }
}