import { useEffect,useState } from "react"; // vd2: 


function App() {
   const [countDown,setCountDown] = useState(180)

   useEffect(() => {
      const timer =setInterval(() =>{
         setCountDown(prev => prev - 1)
      },1000)  
      return () => clearInterval(timer);     
   },[])

   // useEffect(() => {
   //    const timer = setTimeout(() =>{
   //       setCountDown(countDown - 1)
   //       console.log("CountDown",countDown)
   //    },1000)      
   // return () => clearInterval(timer); 
   // },[countDown])


   return (
      <div style = {{paddingTop:32}}>
             <h1>{countDown}</h1>
      </div>       
   )
}
 
 export default App;
