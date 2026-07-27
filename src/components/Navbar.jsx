import React from "react";
import { NavLink } from "react-router";
import "../App.css";
import user from "../assets/user.png";

function Navbar() {
    
    return (
        <div className="w-11/12 mx-auto">
            <div style={{padding: '0'}} className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 text-accent rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/career'>Career</NavLink></li>
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 text-accent">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/career'>Career</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <img src={user} alt="" />
                    <button className="btn btn-primary px-10">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;