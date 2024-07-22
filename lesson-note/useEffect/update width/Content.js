import { useEffect,useState } from "react"; // vd2: 


const tabs = ['posts','comments','albums','photos','todos','users'];
function App() {
   const [width,setWidth] = useState(window.innerWidth)

   useEffect(() => {
      const handleResize = () =>{
         setWidth(window.innerWidth)
      }

      window.addEventListener('resize',handleResize)

      return () =>{
         window.removeEventListener('resize',handleResize)
      }
   }, [])


   return (
      <div style = {{paddingTop:32}}>
             <h1>{width}</h1>
      </div>       
   )
}
 
 export default App;
