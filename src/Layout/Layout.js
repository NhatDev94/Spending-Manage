import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sidebar from "../parts/Sidebar";

import './layout.css'

function Layout({children}) {
    
    return (
        <div className="layout w-full">
            <div className="header w-full bg-blue-500">
                <Header />
            </div>
            <div className="main w-full flex">
                <div className="sidebar w-1/5">
                    <Sidebar />
                </div>
                <div className="content w-4/5 bg-blue-500/10">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout