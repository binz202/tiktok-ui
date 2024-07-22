import { actions } from "./actions"
import { SET_TODO_INPUT,ADD_TODOS,DELETE_TODOS,UPDATE_TODOS,SET_UPDATE_TODO } from "./constant"


const initState = {
    todoInput: "",
    todos:JSON.parse(localStorage.getItem('Todos')) || [],
    isUpdate: null
}

function reducer(state,action){
     switch(action.type){
        case SET_TODO_INPUT: 
            return{
                ...state,
                todoInput:action.payload
            }        
        case ADD_TODOS:
            const newAddTodo = [...state.todos,action.payload]   
            localStorage.setItem('Todos', JSON.stringify(newAddTodo));
            return{
                ...state,
                todos: newAddTodo              
            }                       
        case DELETE_TODOS: 
            const newTodos = [...state.todos]        
            newTodos.splice(action.payload,1)
            localStorage.setItem('Todos', JSON.stringify(newTodos));
            return{
                ...state,
                todos:newTodos,
            }    
        case UPDATE_TODOS:
            const updatedTodos = [...state.todos]
            updatedTodos[state.isUpdate] = action.payload     
            localStorage.setItem('Todos', JSON.stringify(updatedTodos));                     
            return{
                ...state,
                todos:updatedTodos,
                todoInput:'',
                isUpdate:null
            }    
        case SET_UPDATE_TODO:                                    
            return{
                ...state,
                todoInput: state.todos[action.payload],                
                isUpdate: action.payload
            }    
            default: 
                throw new Error('Invalid action')  
    }
              
}

export {initState}
export default reducer