import React, { useState } from 'react';
import Logo from "../images/logo.png";

function Navbar() {


const [navbar, setNavbar] = useState(false)
const changeBackground = () => {
  if (window.scrollY >= 200) {
     setNavbar(true);
  }
  else {
    setNavbar(false);
  }
};
window.addEventListener('scroll',changeBackground);



    return (
        <div>
          <div className={navbar ? 'nav active' : 'nav'}> 


         
    <nav className="navbar navbar-expand-lg navbar-dark"> 
             <div className="container">
  <a className="navbar-brand" href="/"><img className="logo" src={Logo} alt="logo" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
  </div>
    </nav> 

        </div>
       
        </div>
    )
}

export default Navbar
