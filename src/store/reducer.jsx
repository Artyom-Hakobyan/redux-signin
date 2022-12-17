import { legacy_createStore as createStore } from 'redux'

const initialState = {
    users: [{
        username: 'Test',
        password: '123',
    }, {
        username: 'Test2',
        password: '1234'
    }],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
        default:
        return state;
    }
}

export default createStore(reducer)