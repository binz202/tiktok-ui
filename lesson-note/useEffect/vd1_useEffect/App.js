import Content from './Content'
import { useState } from "react";


function App() {
  const [show, setShow] = useState(false)

   return (
      <div style = {{padding:32}}>        
          <button onClick={()=> setShow(!show)} >toggle</button>
          {show && <Content />}
      </div>       
   )
}
 
 export default App;


