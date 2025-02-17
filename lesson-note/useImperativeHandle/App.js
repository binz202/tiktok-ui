import {  useRef } from "react"
import Video from './Video'
function App(){
   const videoRef = useRef()

   const handlePlay = () =>{
      videoRef.current.play()
   }
   const handlePause = () =>{
      videoRef.current.pause()
   }

   return (
          <div style={{padding:20}}>
           <Video ref={videoRef} />
           <button onClick={handlePlay}>play</button>
           <button onClick={handlePause}>pause</button>
         </div>       
   )
}

export default App