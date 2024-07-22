import { useState, memo } from "react";
import Content from './Content'


function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
   setCount(count + 1)
}  
   return (
        <div style={{padding:"10px 32px "}}>
         <Content />
         <h1>{count}</h1>
         <button onClick={handleIncrease}> Click me !</button>
        </div>
   )
}
 
 export default App;


