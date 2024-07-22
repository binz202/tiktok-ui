


import { useEffect,useState } from "react"; // vd2: 

function App() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() =>{
   const apiPost = 'https://jsonplaceholder.typicode.com/posts'
   fetch(apiPost)
      .then((response) => response.json())
      .then(posts => {
         setPosts(posts);
      });
  },[])

   return (
      <div style = {{paddingTop:32}}>        
         <input 
            value = {title}
            onChange = {e => setTitle(e.target.value)}
         />
         <ul>
            {
               posts.map(post =>(
                  <li key={post.id}>{post.title}</li>   
               ))
            }
         </ul>                             
      </div>       
   )
}
 
 export default App;
