import React from "react";
import "./layout.scss"
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout () {


    return (
        <main className="layout">
        
            <Navbar/>
            <Outlet/>
            
        </main>
    )
}

export default Layout