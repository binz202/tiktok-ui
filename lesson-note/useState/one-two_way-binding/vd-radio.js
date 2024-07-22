import { useState } from "react";

// two-way binding

const courses = [
  {
    id: 1,
    name: 'JavaScrip'
  },
  {
    id: 2,
    name: 'React'
  },
  {
    id: 3,
    name: 'NodeJs'
  }
]
function App() {
  const [checked,setChecked] = useState(2)  

const handleSubmit = () => {
  console.log({id:checked})
}

   return (
      <div>
        {
          courses.map(course => (
            <div key = {course.id}>       
              <input type="radio"
              checked = {checked === course.id}
              onChange={() => setChecked(course.id)}
              /> {course.name}                          
            </div>
            ))
        }
         <button onClick={handleSubmit}>Submit</button>
      </div>
   );
 }
 
 export default App;


