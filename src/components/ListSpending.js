import React from "react";
import Spending from "./Spending";
import { useDispatch, useSelector} from 'react-redux'

function ListSpending(props) {
    const dispatch = useDispatch()
    const spendings = useSelector(state => state.spendingReducer.spendings)
    const typeFilter = useSelector(state => state.filterReducer.typeFilter)
    const statusFilter = useSelector(state => state.filterReducer.statusFilter)

    const filterSpending = () => {
        if (!spendings || !spendings.length === 0) return
        let dataFilted = spendings
        if (typeFilter !== 'all') dataFilted = filtedByType(dataFilted)
        if (statusFilter !== 'all') dataFilted = filtedByStatus(dataFilted)
        return dataFilted
    }

    const filtedByType = (data) => {
        if (data.length === 0) return data
        return data.filter(item => {
            return item.type === typeFilter
        })
    }

    const filtedByStatus = (data) => {
        if (data.length === 0) return data
        return data.filter(item => {
            return item.status === statusFilter
        })
    }

    const deleteSpending = id => {
        const newSpendings = spendings.filter(spending => {
            return spending.id !== id
        })
        dispatch({
            type: 'DELETE_SPENDING',
            payload: newSpendings
        })
    }

    return (
        <div className="w-full h-full px-2 bg-white">
            <div className="w-full flex justify-between text-md font-medium py-2 border-b">
                <p className="w-[10%] text-center">Type</p>
                <p className="w-[40%]">Spending</p>
                <p className="w-[20%]">Money</p>
                <p className="w-[20%]">Status</p>
                <p className="w-[10%] text-center"></p>
            </div>
            {
                spendings && filterSpending().map((spending, index) => {
                    return <Spending 
                                spending={spending} 
                                key={index}
                                deleteSpending={deleteSpending}
                            />
                })
            }
        </div>
    )
}

export default ListSpending