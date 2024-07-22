import { useEffect,useState } from "react"; // vd2: 
import React from "react";


const lenssons = [
    {
        id:1,
        name:'Reactjs là gì? Tại sao nên học ReactJS'
    },
    {
        id:2,
        name:'SPA/MPA là gì?'
    },
    {
        id:3,
        name:'Arrow function'
    }
]

function Content() {
   const [lenssonId,setLenssonId] = useState(1)

    useEffect(() => {
        const handleComment = ({detail}) =>{
            console.log(detail)
        }

        window.addEventListener(`lesson-${lenssonId}`,handleComment)

        return () =>{
            window.removeEventListener(`lesson-${lenssonId}`,handleComment)
        }
    },[lenssonId])
    

   return(
    <div>
       <ul>
        {
            lenssons.map(lensson =>(
                <li
                    key={lensson.id}
                    style={{color: lenssonId === lensson.id ? 'red' : '#333'}}
                    onClick={() => setLenssonId(lensson.id)}
                >
                    {lensson.name}
                </li>
            ))
        }
       </ul>
    </div>    
 )
}
 
 export default Content;

