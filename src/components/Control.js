import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SpendingModal from "./SpendingModal";

function Control(props) {
    const dispatch = useDispatch()
    const [isCreate, setIsCreate] = useState(false)
    const [status, setStatus] = useState('all')
    const [type, setType] = useState('all')

    const changeStatus = (value) => {
        setStatus(value)
        dispatch({
            type: 'CHANGE_STATUS_FILTER',
            payload: value
        })
    }

    const changeType = (value) => {
        setType(value)
        dispatch({
            type: 'CHANGE_TYPE_FILTER',
            payload: value
        })
    }

    const hideCreateSpending = () => {
        setIsCreate(false)
    }

    return (
        <div className="w-full flex bg-white p-2 mb-1 justify-between">
            <div className="flex items-center">
                <div className="filter flex mr-8 items-center">
                    <h4 className="font-semibold mr-2 text-sm">Status:</h4>
                    <select 
                        className="outline-none px-2 border rounded"
                        value={status}
                        onChange={e => changeStatus(e.target.value)}
                    >
                        <option value="all" >All</option>
                        <option value="good" >Good</option>
                        <option value="normal" >Normal</option>
                        <option value="bad" >Bad</option>
                    </select>
                </div>

                <div className="filter mr-8 flex items-center">
                    <h4 className="font-semibold mr-2 text-sm">Type:</h4>
                    <select 
                        className="outline-none border rounded"
                        value={type}
                        onChange={e => changeType(e.target.value)}
                    >
                        <option value="all" >All</option>
                        <option value="income" >Income</option>
                        <option value="outcome" >Outcome</option>
                    </select>
                </div>

            </div>

            <div className="flex items-center">
                <div className="add-spending mr-5">
                        <i 
                            className="fa-solid fa-circle-plus text-blue-600 text-xl cursor-pointer 
                                    hover:text-green-600"
                            onClick={() => setIsCreate(true)}
                        ></i>
                        {
                            isCreate && <SpendingModal hide={hideCreateSpending} type="create" />
                        }
                </div>
                <div className="pages flex items-center px-2">
                    <div className="w-[20px] h-[20px] border rounded flex justify-center items-center hover:cursor-pointer mx-1 hover:opacity-50">
                        <i className="fa-solid fa-caret-left"></i>
                    </div>
                    <p className="w-[20px] h-[20px] border rounded flex justify-center items-center mx-1">1</p>
                    <div className="w-[20px] h-[20px] border rounded flex justify-center items-center hover:cursor-pointer mx-1 hover:opacity-50">
                        <i className="fa-solid fa-caret-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Control