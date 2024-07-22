import {useReducer} from "react";


const initState = 0;

const ACTION_DOWN = "down";
const ACTION_UP = "up";

const reducer = (state,action) => {
   switch(action){
      case ACTION_DOWN:
         return state-1;
      case ACTION_UP:
         return state +1;
      default:
         throw new Error ("Invailef action")
   }
}
function App() {
  const [count,dispatch ] = useReducer(reducer,initState)

   return (
        <div style={{padding:"10px 32px "}}>
            <h1>{count}</h1>
            <button 
               onClick={() => dispatch(ACTION_DOWN)}
            >
               Down
            </button>
            <button 
               onClick={() => dispatch(ACTION_UP)}
            >
               Up
            </button>
        </div>
   )
}
 
 export default App;


