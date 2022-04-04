const initialState = {
    uid: null
}

const userReducer = (state = initialState, action) => {
    switch (action.key) {
        case 'SET_UID':
            return state
        default:
            return state
    }
}

export default userReducer