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

        //to refresh the window after getting the data
        // window.location.reload();

        return dispatch({ type: SIGN_IN, payload: User.data });

    } catch (error) {
        return dispatch({ Type: "Error", payload: error });
    }
}