import { combineReducers } from 'redux';


const sign = (state = '', action) => {
    switch (action.type) {
        case 'SET_SIGNATURE':
            console.log('inside set signature', action.payload);
            return action.payload
        default:
            return state;
    }
}






const rootReducer = combineReducers({
    sign
})



export default rootReducer;