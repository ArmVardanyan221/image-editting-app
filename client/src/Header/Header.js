import React, { useState } from 'react'
import './header.css'

export const afterLogin = ["Users", "Images", "Services", "Logout"];
export const beforLogin = ["Login", "Registration"];

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <header className="header">
    <div className="logo">
      <a href='/' className='nav-link'>Home</a>
    </div>
    <h1>Image Collabrating tool</h1>

    <nav className="navbar">
          { isLogged === false  ?
            beforLogin.map((elem, index) => {
              return(
                <a key={index} className='nav-link' href={"/" + elem}>{elem}</a>
              )
            }) :  afterLogin.map((elem, index) => {
              return(
                <a key={index} className='nav-link' href={"/" + elem}>{elem}</a>
              )
            })
          }
    </nav>
  </header>
  )
}
export default Header;
