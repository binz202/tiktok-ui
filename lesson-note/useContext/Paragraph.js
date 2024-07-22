import css from './App.css'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph(){
    const contextPara  = useContext(ThemeContext)

  return( <p className={contextPara.theme}>
        lorem ipsum dolor sit amet, consectetur adip
   </p>)
}

export default Paragraph