import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = () => {
  return <ul>
    <li>
     <nav className="navbar">
       <div className="nav-center">
         <div className="nav-header">
          <img src={logo} alt="logo"/>
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
         </div>
         <PageLinks styleClass="nav-links"></PageLinks>
       </div>
     </nav>
    </li> 
  </ul>
}

export default Navbar
