import React from 'react'
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import Collection from './components/Collection'


const MyRoutes = () => {
  return (
    <>
    
    <Router>
        <Routes>
            <Route path='/collection' element={<Collection/>}/>
          
        </Routes>
    </Router>
    
    </>
  )
}

export default MyRoutes