const initialState = {
    typeFilter: 'all',
    statusFilter: 'all',
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TYPE_FILTER':
            return {
                ...state,
                typeFilter: action.payload
            }  
        case 'CHANGE_STATUS_FILTER':
            return {
                ...state,
                statusFilter: action.payload
            }         
        default:
            return state
    }
}

export default filterReducer