//if we want to make any request to the database then we want axios
import axios from 'axios';

//redux types
import { SIGN_IN, SIGN_UP, SIGN_OUT, GOOGLE_AUTH } from './auth.type';

//signIn action : to happen this action some datas (email id and password in the case of sign In) is passed as userData is passed and after that to store the datas inside the STORE, SIGN_IN reducer is called using dispatch to move forward
export const signIn = (userData) => async (dispatch) => {
    try {

        const User = await axios({
            method: "POST",
            url: "http://localhost:4000/auth/signin",
            data: { credentials: userData }
        });

        localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }));

        axios.defaults.headers.common["Authorization"] = `Bearer ${User.data.token}`; //set an Authorizaiton header for all the future request that this user made using axios to backend

        //to refresh the window after getting the data
        // window.location.reload();

        return dispatch({ type: SIGN_IN, payload: User.data });

    } catch (error) {
        return dispatch({ Type: "Error", payload: error });
    }
}

//signUp action
export const signUp = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: "http://localhost:4000/auth/signup",
            data: { credentials: userData }
        });

        localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }));

        axios.defaults.headers.common["Authorization"] = `Bearer ${User.data.token}`;

        // window.location.reload();

        return dispatch({ type: SIGN_UP, payload: User.data });

    } catch (error) {

    }
}

//sign out
export const signOut = () => async (dispatch) => {
    try {
        localStorage.removeItem("zomatoUser");
        //window.location.href = "http://localhost:3000"; --this will refresh our page. Instead we could redirect the page in the component's onclick funciton

        return dispatch({ type: SIGN_OUT, payload: {} })
    } catch (error) {
        return dispatch({ type: "ERROR, payload: error" })
    }
}

export const googleAuth = (token) => async (dispatch) => {
    try {
        localStorage.setItem("zomatoUser", JSON.stringify({ token }));

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        return dispatch({ type: GOOGLE_AUTH, payload: { token } });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}