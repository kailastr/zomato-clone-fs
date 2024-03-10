import axios from 'axios';

import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from './restaurant.type';

export const getRestaurant = () => async (dispatch) => {
    try {
        const restaurantList = await axios({
            method: "GET",
            url: "http://localhost:4000/restaurant/?city=Kochi"
        });

        return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data.restaurants });

    } catch (error) {
        return dispatch({ type: "GetRestaurantERROR", payload: error })
    }
};

export const getSpecificRestaurant = (_id) => async (dispatch) => {
    try {
        const restaurantList = await axios({
            method: "GET",
            url: `http://localhost:4000/restaurant/${_id}`
        });
        return dispatch({ type: GET_SPECIFIC_RESTAURANT, payload: restaurantList.data });

    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}