import { useRef,useState,useEffect } from "react";
import React from "react";


function Content() {
   const [count,setCount] = useState(60)

    const timeId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() =>{
        prevCount.current = count
    },[count])

    useEffect(()=>{
       const react = h1Ref.current.getBoundingClientRect()
       console.log(react)
    },[])

    const handleStart = () =>{
        timeId.current = setInterval(() =>{
            setCount(prevCount => prevCount - 1)
        },1000)
        console.log('start -' + timeId.current)
    }

    const handleStop = () =>{
        clearInterval(timeId.current)
        console.log('stop -' + timeId.current)
    }

    console.log(count,prevCount.current)

   return(
    <div>
       <h1 ref={h1Ref}>{count}</h1>
       <button onClick={handleStart}>Run</button>
       <button onClick={handleStop}>Stop</button>
    </div>    
 )
}
 
 export default Content;

