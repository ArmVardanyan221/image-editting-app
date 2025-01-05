import React, { useState, useEffect } from 'react'
import './header.css'

export const afterLogin = ["Users", "Images", "Services", "Logout"];
export const beforLogin = ["Login", "Registration"];

function Header() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogged");
    if (loginStatus === "true") {
      setIsLogged(true);
    }
  }, [isLogged]); // Runs once when the component is mounted

  const handleLogout = () => {
    localStorage.removeItem('isLogged');

    setIsLogged(false);
  };

  const navItems = isLogged ? afterLogin : beforLogin;
  return (
    <header className="header">
      <div className="logo">
        <a href='/' className='nav-link'>Home</a>
      </div>
      <h1>Image Collabrating tool</h1>

      <nav className="navbar">
        {Array.isArray(navItems) && navItems.map((elem, index) => (
          <a key={index} className="nav-link" href={"/" + elem} onClick={elem === 'Logout' ? handleLogout : undefined}>
            {elem}
          </a>
        ))}
      </nav>
    </header>
  )
}
export default Header;
