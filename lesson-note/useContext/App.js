import Context from './Context'
import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'


function App(){
  const contextApp = useContext(ThemeContext)
   return (      
          <div style={{padding:20}}>
            <button onClick={contextApp.handleToggle}>toggle</button>
            <Context />
         </div>       
   )
}

export default App