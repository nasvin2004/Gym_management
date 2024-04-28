import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './user'
import Create from './create'
import Update from './update'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<User/>} ></Route> 
       <Route path='/create' element={<Create/>} ></Route>
       <Route path='/update/:id' element={<Update/>} ></Route>  
      </Routes>
      </BrowserRouter>

    </div>
  )
}

