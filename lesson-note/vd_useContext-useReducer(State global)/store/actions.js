import { SET_TODO_INPUT,ADD_TODOS,DELETE_TODOS,UPDATE_TODOS,SET_UPDATE_TODO } from "./constant";

export const setTodoInput = payload =>(
    {
        type: SET_TODO_INPUT,
        payload
    }
)
export const addTodo = payload =>(
    {
        type: ADD_TODOS,
        payload
    }
)
export const delete_todos = payload =>(
    {
        type: DELETE_TODOS,
        payload
    }
)
export const update_todo = payload =>(
    {
        type: UPDATE_TODOS,
        payload
    }
)
export const set_update_todo = payload =>(
    {
        type: SET_UPDATE_TODO,
        payload
    }
)