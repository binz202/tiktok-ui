import {useReducer , useRef} from "react";

//1.Init state
const initState = {
   job: '',
   jobs: JSON.parse(localStorage.getItem('TodoReactJs')) || [],
   isUpdate: null
};


//2. Actions   
const SET_JOB = 'setJob';
const ADD_JOB = 'addJob';
const UPDATE_JOB = 'updateJob';
const DELETE_JOB = 'deleteJob';
const SET_UPDATE_JOB = 'setUpdateJob';

const setJob = payload =>{
   return{
      type: SET_JOB,
      payload
   }
}

const addJob = payload =>{
   return{
      type: ADD_JOB,
      payload
   }
}

const deleteJob = payload =>{
   return{
      type: DELETE_JOB,
      payload
   }
}

const updateJob = payload =>{
   return{
      type: UPDATE_JOB,
      payload
   }
}

const setUpdateJob = payload =>{
   return{
      type: SET_UPDATE_JOB,
      payload
   }
}

//3. Reducer
const reducer = (state,action) => {
   let newState
   
   switch(action.type){
      case SET_JOB:
         newState = {
            ...state,
            job: action.payload           
         }   
         break     
      case ADD_JOB:
         newState = {
            ...state,
            jobs: [...state.jobs,action.payload]
         }
         break
         case UPDATE_JOB:
            const updatedJobs = [...state.jobs]
            updatedJobs[state.isUpdate] = action.payload
            newState = {
              ...state,
              jobs: updatedJobs,
              job: '',
              isUpdate: null
            }
            break
          case SET_UPDATE_JOB:
            newState = {
              ...state,
              job: state.jobs[action.payload],
              isUpdate: action.payload
            }
            break
      case DELETE_JOB:
         const newJobs = [...state.jobs]

         newJobs.splice(action.payload, 1)

         newState = {
            ...state,
            jobs:newJobs
         }
         break
      default:
         throw new Error ("Invalid action")
   }
   console.log('newState:', newState)

   localStorage.setItem('TodoReactJs', JSON.stringify(newState.jobs));

   return newState;
}

//4. dispatch

function App() {

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
 
 export default App;


