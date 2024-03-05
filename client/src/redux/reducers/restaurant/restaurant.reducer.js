import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from './restaurant.type';

const initialState = {
    restaurants: [],
    selectedRestaurant: {}
};

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANT:
            return {
                ...state,
                restaurants: [...action.payload]
            }
            break;
        case GET_SPECIFIC_RESTAURANT:
            return {
                ...state,
                selectedSpecificRestaurant: { ...action.payload }
            }
            break;

        default:
            return {}
            break;
    }
}

export default restaurantReducer;