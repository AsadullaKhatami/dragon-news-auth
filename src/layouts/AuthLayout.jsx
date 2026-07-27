import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function AuthLayout(){
    return(
        <div className="bg-base-200 min-h-screen">
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}

export default AuthLayout;