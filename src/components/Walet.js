import React from "react";

function Walet(props) {

    return (
        <div className="w-full flex justify-between bg-white p-1 mb-1">

            {/* item */}
            <div className="border rounded p-2">
                <h4 className="text-sm font-bold mb-5">Income</h4>
                <div className="flex items-center">
                    <i className="fa-solid fa-circle-right text-green-600 mr-5"></i>
                    <p className="text-xl font-semibold">{1000000} đ</p>
                </div>
            </div>

            {/* item */}
            <div className="border rounded p-2">
                <h4 className="text-sm font-bold mb-5">Spending</h4>
                <div className="flex items-center">
                    <i className="fa-solid fa-circle-left text-red-600 mr-5"></i>
                    <p className="text-xl font-semibold">{1000000} đ</p>
                </div>
            </div>

            {/* item */}
            <div className="border rounded p-2">
                <h4 className="text-sm font-bold mb-5">Save</h4>
                <div className="flex items-center">
                    <i className="fa-solid fa-wallet mr-5"></i>
                    <p className="text-xl font-semibold">{1000000} đ</p>
                </div>
            </div>

        </div>
    )
}

export default Walet