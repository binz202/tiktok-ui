import { useState } from "react";

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
  const [checked,setChecked] = useState([])  

const handleCheck = (id) =>{
  setChecked(prev => {
    const isChecked = checked.includes(id);
    if(isChecked){
      return checked.filter(item => item !== id)
    }else{
      return [...prev, id]
    }
  })
}
const handleSubmit = () => {
  console.log({id:checked})
}

   return (
      <div>
        {
          courses.map(course => (
            <div key = {course.id}>       
              <input type="checkbox"
              checked = {checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
              /> {course.name}                          
            </div>
            ))
        }
         <button onClick={handleSubmit}>Submit</button>
      </div>
   );
 }
 
 export default App;


