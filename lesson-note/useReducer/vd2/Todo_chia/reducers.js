import {SET_JOB,ADD_JOB,DELETE_JOB,UPDATE_JOB,SET_UPDATE_JOB} from './constants'

export const initState = {
    job: '',
    jobs: JSON.parse(localStorage.getItem('TodoReactJs')) || [],
    isUpdate: null
 };
 
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
 
 export default reducer