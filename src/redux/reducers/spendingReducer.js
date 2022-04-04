const initialState = {
    spendings: [
        {
            uid: '1',
            spending: 'An Sang',
            money: '20000',
            type: 'outcome',
            status: 'normal',
            time: new Date()
        },
        {
            uid: '1',
            spending: 'An Trua',
            money: '40000',
            type: 'outcome',
            status: 'good',
            time: new Date()
        },
        {
            uid: '1',
            spending: 'An Toi',
            money: '30000',
            type: 'outcome',
            status: 'bad',
            time: new Date()
        },
    ]
}

const spendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_SPENDING':
            return {
                ...state,
                spendings: [...state.spendings, action.payload]
            }
        case 'UPDATE_SPENDING':
            return {
                ...state,
                spendings: action.payload
            }
        case 'DELETE_SPENDING':
            return {
                ...state,
                spendings: action.payload
            }
        default:
            return state
    }
}

export default spendingReducer