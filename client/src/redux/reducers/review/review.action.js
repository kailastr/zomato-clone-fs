import axios from 'axios';

import { GET_REVIEW, POST_REVIEW } from './review.type';

export const getReview = (resId) => async (dispatch) => {
    try {
        const reviewList = await axios({
            method: "GET",
            url: `http://localhost:4000/review/${resId}`
        });

        return dispatch({ type: GET_REVIEW, payload: reviewList.data });

    } catch (error) {
        return dispatch({ type: "GetReviewError", payload: error });
    }
};

export const postReview = (reviewData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            url: "http://localhost:4000/review/new",
            data: { reviewData }
        });
        return dispatch({ type: POST_REVIEW, payload: reviewData });
    } catch (error) {
        return dispatch({ type: "PostReviewError", payload: error });
    }
};