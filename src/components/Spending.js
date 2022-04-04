import React, { useState } from "react";
import SpendingModal from "./SpendingModal";

function Spending(props) {
    const [isUpdate, setIsUpdate] = useState(false)

    const hideUpdateSpending = () => {
        setIsUpdate(false)
    }

    return (
        <div className="w-full flex justify-between py-2 border-b">
            {
                isUpdate && <SpendingModal hide={hideUpdateSpending} type="update" itemUpdate={props.spending} />
            }
            <p className="w-[10%] text-center">
                {
                    props.spending.type === 'outcome' && <i className={`fa-solid fa-circle-left text-red-600 mr-5`}></i>
                }
                {
                    props.spending.type === 'income' && <i className="fa-solid fa-circle-right text-green-600 mr-5"></i>
                }
            </p>
            <p className="w-[40%]">{props.spending.spending}</p>
            <p className="w-[20%]">{props.spending.money}</p>
            <div className="w-[20%]">
                {
                    props.spending.status === 'good' && <p className="py-0.5 px-1 bg-green-600 w-fit rounded text-white text-xs">{props.spending.status}</p>
                }
                {
                    props.spending.status === 'bad' && <p className="py-0.5 px-1 bg-red-600 w-fit rounded text-white text-xs">{props.spending.status}</p>
                }
                {
                    props.spending.status === 'normal' && <p className="py-0.5 px-1 bg-yellow-500 w-fit rounded text-white text-xs">{props.spending.status}</p>
                }
            </div>
            <div className="w-[10%] min-w-[100px] flex items-center justify-between">
                <p 
                    className="text-xs font-normal bg-blue-500 p-1 rounded 
                            text-white hover:opacity-50 cursor-pointer"
                    onClick={() => setIsUpdate(true)}
                >Update</p>
                <p 
                    className="text-xs font-normal bg-red-500 p-1 rounded text-white hover:opacity-50 cursor-pointer" 
                    onClick={() => props.deleteSpending(props.spending.id)}
                >Delete</p>
            </div>
        </div>
    )
}

export default Spending