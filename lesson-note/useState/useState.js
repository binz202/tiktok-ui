import { useState } from "react";


function App() {
    const [curr,replace] = useState({
     name : 'A',
     address : 'TB'
    })
   
    const handleUpdate = () =>{
     replace({
       ...curr,
       bio: 'love'
     })
     
    }
     return (
       <div className="App">
         <h1>{JSON.stringify(curr)}</h1>
         <button onClick={handleUpdate}>press</button>
       </div>
     );
   }
   
   export default App;