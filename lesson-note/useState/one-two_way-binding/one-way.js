import { useState } from "react";


function App() {
  const [name,setName] = useState('')

  
   return (
     <div className="App">       
       <input 
        // value={name} 
        onChange = {e => setName(e.target.value)}
       />
       <button 
        onClick={() => setName('nguyen van b')}       
       >change</button>
     </div>
   );
 }
 
 export default App;


