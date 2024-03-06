import { GET_REVIEW, POST_REVIEW } from './review.type';

const initialState = {
    reviews: []
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEW:
            return {
                ...state,
                review: action.payload
            };
            break;

        case POST_REVIEW:
            return {
                ...state,
                reviews: [action.payload, ...state.reviews] //add action.payload in the reviews section
            }
            break;

        default:
            return { ...state };
            break;
    }
}

export default reviewReducer;