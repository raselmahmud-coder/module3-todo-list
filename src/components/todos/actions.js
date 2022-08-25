import { ADD_TODO, CLEAR_COMPLETED, COLOR_TODO, COMPLETED_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes"

export const added = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
}
export const toggled = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}
export const colored = (id, color) => {
    return {
        type: COLOR_TODO,
        id,
        color
    }
}
export const removed = (id) => {
    return {
        type: REMOVE_TODO,
        id
    }
}
export const allCompleted = () => {
    return {
        type: COMPLETED_TODO,
    }
}
export const cleared = () => {
    return {
        type: CLEAR_COMPLETED
    }
}
export const addTodo = (todo) => {
    return (dispatch) => {
        dispatch(added(todo));
    }
}
export const toggleTodo = (id) => {
    return (dispatch) => {
        dispatch(toggled(id));
    }
}

