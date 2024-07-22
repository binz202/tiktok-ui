import Heading from './Components/Heading/Heading'
import Paragraph from './Components/Paragraph/Paragraph'
import GlobalStyles from './Components/GlobalStyles/GlobalStyles'
function App(){
   return (
          <GlobalStyles>
            <div style={{padding:20}}>
               <Heading/>
               <Paragraph/>
            </div>     
          </GlobalStyles>  
   )
}

export default App