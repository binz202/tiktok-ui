import { useState } from "react";


function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')

const handleSubmit = () => {
  console.log({
    name,
    email,
  })
}
   return (
     <div className="App">       
       <input         
        onChange = {e => setName(e.target.value)}
       />
       <input         
        onChange = {e => setEmail(e.target.value)}
       />
       <button 
        onClick={handleSubmit}       
       >Submit</button>
     </div>
   );
 }
 
 export default App;


