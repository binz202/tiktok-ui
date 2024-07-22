import {useReducer , useRef} from "react";
import reducer,{initState} from "./reducers";
import { setJob,addJob,deleteJob,updateJob,setUpdateJob } from "./actions";


function Index() {

   const [state,dispatch] = useReducer(reducer,initState);
   const inputRef = useRef();
   // console.log(state)
  const {job,jobs,isUpdate} = state

  const handleSubmit = () => {
        if (isUpdate !== null) {
      dispatch(updateJob(job));
    } else {
      dispatch(addJob(job));      
    } 
    dispatch(setJob(''))
    inputRef.current.focus();
  }


   return (
        <div style={{padding:"10px 32px "}}>
            <h1>Todo</h1>
            <input 
               ref={inputRef}
               value={job}
               placeholder="Enter todos..."
               onChange={e => {
                  dispatch(setJob(e.target.value))
               }}
            />              
            <button 
               onClick={handleSubmit}
            >
              {isUpdate !== null ? 'Update' : 'Add'}
            </button>
            <ul>
               {
                  jobs.map((job,index) =>(
                      <li key={index}>{job}
                        <span
                           style={{cursor: "pointer"}}
                           onClick={() => dispatch(deleteJob(index))}
                        >
                           &times;
                        </span>
                        <span
                           style={{ cursor: "pointer", marginLeft: '10px' }}
                           onClick={() => dispatch(setUpdateJob(index))}
                        >
                           &#9998;
                        </span>
                      </li>

                  ))
               }
              
            </ul>
        </div>
   )
}
 
 export default Index;


