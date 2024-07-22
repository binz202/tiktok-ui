import { useState } from "react";

function App() {
  

  const [input, setInput] = useState()  //useState cua input
  const [jobs, setJobs] = useState(() =>{
    const storageJob = JSON.parse(localStorage.getItem('job'))    
    return storageJob;
  })  //useState cua li

const handleSubmit = () => {
 setJobs( prev => {
  const newJobs = [...prev, input]
  
  // Save localStorage
  const jsonJobs = JSON.stringify(newJobs)
  localStorage.setItem('job', jsonJobs)

  return newJobs;
 })
 setInput('')
}

const handleDel = (delIndex)=>{
  setJobs((prev) => {
    const newDelJobs = prev.filter((item,index) => index !== delIndex);
    
    // Save localStorage
    localStorage.setItem('job', JSON.stringify(newDelJobs))
    return newDelJobs;
  })
}


   return (
      <div style = {{padding:32}}>        
        <input 
          value={input} 
          onChange={e=> setInput(e.target.value)}
        />          
        <button onClick={handleSubmit}>add</button>  

        <ul>
          {jobs.map((job,  index) => (
              <li key={index}>{job} <span style={{cursor:'pointer'}} onClick={()=>handleDel(index)}>x</span></li>               
            ))}
        </ul>       
      </div>
   )
}
 
 export default App;


