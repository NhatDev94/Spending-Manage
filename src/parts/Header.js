import React from "react";
import { useSelector } from "react-redux";

function Header(props) {
    const uid = useSelector(state => state.userReducer.uid)


    return (
        <div className="w-full flex justify-between items-center px-20 text-white">
            <h1 className="text-xl font-bold">Spending Manage</h1>
            <div className="flex items-center justify-between">
                <p className="item mr-5 hover:underline hover:cursor-pointer text-sm">Đăng ký</p>
                {
                    !uid && <p className="item mr-5 hover:underline hover:cursor-pointer text-sm">Đăng nhập</p>
                }
                {
                    uid && <div className="item mr-5 w-[30px] h-[30px] bg-black rounded-full"></div>
                }
            </div>
        </div>
    )
}

export default Header