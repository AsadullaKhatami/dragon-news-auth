import React, { use, useContext } from "react";
import { Link, NavLink } from "react-router";
import "../App.css";
import userIcon from "../assets/user.png";
import { UserContext } from "../provider/AuthProvidr";

function Navbar() {
    const {user, signout} = use(UserContext);
    // console.log(user);
    const handelLogout = () => {
        signout();
    }
    return (
        <div className="w-11/12 mx-auto">
            <div style={{padding: '0'}} className="navbar bg-transparent">
                <div>
                    <p>{user && user.email}</p>
                </div>
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
                    {/* <img title={user.displayName ? user.displayName : "useName"} className="w-12 rounded-full cursor-pointer" src={user.photoURL ? user.photoURL : userIcon} alt="" /> */}
                    <img className="w-12 rounded-full cursor-pointer" title={user ? user.displayName : "userName"} src={user ? user.photoURL : userIcon} alt="" />
                    {
                        user ? <button onClick={handelLogout} className="btn btn-primary px-10">LogOut</button> : <Link to='/auth/login' className="btn btn-primary px-10">Login</Link>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;