import {Routes,Route,Link} from 'react-router-dom'
import React from'react'
import HomePage from './Pages/Home'
import NewsPage from './Pages/News'
import ManagerPage from './Pages/Manager'
function App(){
   return (          
            <div style={{padding:20}}>
              <nav>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/news">News</Link>
                  </li>
                  <li>
                     <Link to="/manager">Manager</Link>
                  </li>
               </ul>
              </nav>
              
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/news' element={<NewsPage />} />
               <Route path='/manager' element={<ManagerPage />} />
            </Routes>
            </div>     
   )
}

export default App