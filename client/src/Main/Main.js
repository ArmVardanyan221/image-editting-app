import React from 'react'
import Register from '../Pages/Register';
import Login from '../Pages/Login'
import "./main.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function Main() {
  return (
    <main>
      <Router>
        <div className='box'>
          <Routes>
            <Route path='login' Component={Login} />
            <Route path='registration' Component={Register} />
          </Routes>  
        </div>  
      </Router>      
    </main>
  )
}
export default Main;
