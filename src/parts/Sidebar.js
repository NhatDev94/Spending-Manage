import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar(props) {
    const location = useLocation()

    const sidebars = [
        {
            text: 'Home',
            path: '/',
        },
        {
            text: 'Sendings',
            path: '/spendings',
        },
        {
            text: 'Planing',
            path: '/planing',
        },
    ]

    return (
        <div className="pt-2 pl-2 h-full bg-blue-500/20">
            <div className="h-full pt-4">
            {
                sidebars && sidebars.map((item, index) => {
                    return (
                        <div className="" key={index}>
                            <Link 
                                className={`inline-block w-full py-2 pl-2 mb-1 text-sm font-semibold 
                                            hover:text-blue-600 hover:bg-white ${item.path === location.pathname && 'link-active'}`} 
                                to={item.path}
                            >{item.text}</Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Sidebar