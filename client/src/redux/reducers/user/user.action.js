import axios from 'axios';

//types
import { SELF, GET_USER, CLEAR_USER } from './user.type';

//to get all user's data to show in review section
export const getUser = (_id) => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhosot:4000/user/${_id}`
        });

        return dispatch({ type: GET_USER, payload: User.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

//to get the user's data after they login
export const getMySelf = () => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: 'http://localhost:4000/user/'
        });

        return dispatch({ type: SELF, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

//action for logout
export const clearUser = () => async (dispatch) => {
    try {
        return dispatch({ type: CLEAR_USER, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}