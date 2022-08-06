import React from 'react'

function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="!#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="!#">Movie</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="!#">Theatre</a>
        </li>
      </ul>  
      
      <button>Login</button>
    </div>
  </div>
</nav>
    </div>
    
  )
}

export default Navbar
