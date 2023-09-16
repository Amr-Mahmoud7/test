import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div >
    <nav className="navbar py-4">
    <div className="logo ms-5 ">
        <NavLink className="ps-5 fs-2 " to="/">START FRAMEWORK</NavLink>
    </div>
    <div className="nav-content ms-5">
        <ul className="nav-NavLinks ">
        <li>
            <NavLink  to="/about" className= {({isActive})=> isActive ? "test":""}>About</NavLink>
        </li>
        <li>
            <NavLink  to="/portfolio" className={({isActive})=>isActive?"test":""}>PORTFOLIO</NavLink>
        </li>
        <li>
            <NavLink  to="/contact" className={({isActive})=>isActive ? "test":""}>CONTACT</NavLink>
        </li>
        </ul>
    </div>
    </nav>
    </div>
  )
}
