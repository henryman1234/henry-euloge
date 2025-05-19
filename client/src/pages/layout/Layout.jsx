import React from "react";
import "./layout.scss"
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Layout () {

    return (
        <div className="layout">
        
            <div className="navbar">
                <Navbar/>
            </div>

            <div className="content">
                <Outlet/>
            </div>

        </div>
    )
}

export default Layout