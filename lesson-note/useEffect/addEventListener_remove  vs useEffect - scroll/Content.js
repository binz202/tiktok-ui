import { useEffect,useState } from "react"; // vd2: 


const tabs = ['posts','comments','albums','photos','todos','users'];
function App() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type,setType] = useState('posts')
  const [showGoToTop,setShowGoToTop] = useState(false)

  useEffect(() =>{
   const apiPost = `https://jsonplaceholder.typicode.com/${type}`
   fetch(apiPost)
      .then((response) => response.json())
      .then(posts => {
         setPosts(posts);
      });
  },[type])

  useEffect(() =>{
   const handleScroll = () =>{
      if(window.scrollY>=200){
         setShowGoToTop(true)
      }else{
         setShowGoToTop(false)
      }      
   }
   window.addEventListener('scroll',handleScroll)

   return(
      () => window.removeEventListener('scroll',handleScroll)      
   )
  }, [])

   return (
      <div style = {{paddingTop:32}}>
              {tabs.map(tab =>(
               <button key={tab} onClick={() => setType(tab)} style={type === tab ? {
                  backgroundColor: 'lightblue',
                  color: 'black',
                  border: '2px solid blue',
                  padding: '10px',                 
                  cursor: 'pointer'
               } : {}}>
                  {tab}   
               </button>   
              ))}
         <input 
            value = {title}
            onChange = {e => setTitle(e.target.value)}
         />
         <ul>
            {
               posts.map(post =>(
                  <li key={post.id}>{post.title || post.name || post.username}</li>   
               ))
            }
         </ul>                             
            {showGoToTop && (
               <button
                  style = {{position:'fixed',
                            right: 20,
                            bottom: 20
               }}
               >               
               Go to Top
               </button>
            )}
      </div>       
   )
}
 
 export default App;
