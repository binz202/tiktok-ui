import { useStore, actions} from "./store"
import { useRef } from "react"
import { setTodoInput } from "./store/actions"

function App(){
   const [state,dispatch] = useStore()
   const {todos,todoInput,isUpdate} = state

   const inputRef = useRef()

   const handleAdd = () => {
      if(isUpdate !== null){
         dispatch(actions.update_todo(todoInput))        
      }
      else{
         dispatch(actions.addTodo(todoInput))
      }
      dispatch(setTodoInput(''))
      inputRef.current.focus()
   }
   return (
          <div style={{padding:20}}>
            <input 
               value={todoInput}
               ref={inputRef}
               placeholder="Enter todo..."
               onChange={
                  e=>{
                     dispatch(actions.setTodoInput(e.target.value))
                  }
               }
            />
            <button
               onClick={handleAdd}
            >
               {isUpdate !== null ? "Update" : "Add"}
            </button>
            <ul>
               {
                  todos.map((todo, index) =>(
                     <li key={index}>{todo}
                         <span style={{cursor:"pointer"}} onClick={() => dispatch(actions.delete_todos(index))}> &times;</span>
                         <span style={{cursor:"pointer"}} onClick={() => dispatch(actions.set_update_todo(index))}> &#9998;</span>
                     </li>                     
                  ))
               }              
            </ul>
         </div>       
   )
}

export default App