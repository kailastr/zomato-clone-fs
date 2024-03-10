import axios from "axios";

import { GET_FOOD, GET_FOOD_LIST } from './food.type'

export const getFood = (foodId) => async (dispatch) => {
    try {
        const Food = await axios({
            method: "GET",
            url: `http://localhost:4000/food/${foodId}`
        })

        return dispatch({ type: GET_FOOD, payload: Food.data });
    } catch (error) {
        return dispatch({ type: "GetFoodError", payload: error });
    }
};

export const foodList = (menuId) => async (dispatch) => {
    try {
        const Menu = axios({
            method: "GET",
            url: `http://localhost:4000/menu/list/${menuId}`
        });

        return dispatch({ type: GET_FOOD_LIST, payload: Menu.data });
    } catch (error) {
        return dispatch({ type: "getFoodListError", payload: error });
    }
}