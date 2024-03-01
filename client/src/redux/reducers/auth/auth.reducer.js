//this file will be a small storage unit for the auth section
import { SIGN_IN, SIGN_UP, SIGN_OUT, GOOGLE_AUTH } from './auth.type';

//the initial state of the storage unit (will be empty)
const initialState = {};

//here we say initially the state should have to be this and after this action certain changes should have to be added to the state
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state, //let the state be same
                ...action.payload, //add the payload(the data with the action) to the state
            };
            break;
        case SIGN_UP:
            return {
                ...state,
                ...action.payload
            };
            break;
        case SIGN_OUT:
            return {} //if it is a signOut then empty the state
            break;
        default:
            return { ...state } //in the default case then we dont have to mention the state it will automatically updated
            break;
    }
}

export default authReducer;