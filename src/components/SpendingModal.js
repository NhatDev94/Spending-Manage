import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SpendingModal(props) {
    const dispatch = useDispatch()
    const spendings = useSelector(state => state.spendingReducer.spendings)

    const [spending, setSpending] = useState(props.type === 'update' ? props.itemUpdate.spending : '')
    const [money, setMoney] = useState(props.type === 'update' ? props.itemUpdate.money : '')
    const [type, setType] = useState(props.type === 'update' ? props.itemUpdate.type : 'Type')
    const [status, setStatus] = useState(props.type === 'update' ? props.itemUpdate.status : 'Status')

    const submit = () => {

        if (spending === '' ||  money === '' || type === 'Type' || status === 'Status') return

        const newSpending = {
            uid: '1',
            id: props.type === 'update' ? props.itemUpdate.id : Math.random(),
            spending,
            money,
            type,
            status
        }

        if (props.type === 'create') {
            dispatch({
                type: 'CREATE_NEW_SPENDING',
                payload: newSpending
            })
        }
        
        if (props.type === 'update') {
            const newSpendings = spendings.map(item => {
                if(item.id === props.itemUpdate.id) item = newSpending
                return item
            })
            dispatch({
                type: 'UPDATE_SPENDING',
                payload: newSpendings
            })
        }
        clearData()
        props.hide()
    }

    const clearData = () => {
        setSpending('')
        setMoney('')
        setType('Type')
        setStatus('Status')
    }


    return (
        <div className='w-screen h-screen fixed top-0 left-0 z-10'>
            <div 
                className='overlay absolute top-0 left-0 w-full h-full bg-black/20'
                onClick={props.hide}
            ></div>
            <div className='w-[360px] p-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white absolute z-10'>
                <h4 className='w-full text-center text-lg font-bold mb-4'>{props.type === 'create' ? 'New Spending' : 'Update Spending'}</h4>
                <input 
                    className='w-full outline-none rounded p-1 mb-3 border'
                    placeholder='Enter pending...' 
                    value={spending}
                    onChange={e => setSpending(e.target.value)}
                />
                <input 
                    className='w-full outline-none rounded p-1 mb-3 border' 
                    placeholder='Enter money...' 
                    value={money}
                    onChange={e => setMoney(e.target.value)}
                />
                <div className='flex justify-between mb-6'>
                    <select 
                        className='w-2/5 border outline-none py-1'
                        value={type}
                        onChange={e => setType(e.target.value)}
                    >
                        <option value="Type" >Type</option>
                        <option value="income">Income</option>
                        <option value="outcome" >Outcome</option>
                    </select>     
                    <select 
                        className='w-2/5 border outline-none py-1'
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                    >
                        <option value="Status" >Status</option>
                        <option value="good" >Good</option>
                        <option value="normal" >Normal</option>
                        <option value="bad" >Bad</option>
                    </select>  
                </div>
                <button 
                    className='w-full p-2 text-white bg-green-600 uppercase rounded hover:bg-blue-500'
                    onClick={submit}
                >{props.type}</button>
            </div>
        </div>
    )
}

export default SpendingModal