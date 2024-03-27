import axios from 'axios';

import { GET_REVIEW, POST_REVIEW } from './review.type';

export const getReview = (resId) => async (dispatch) => {
    try {
        const reviewList = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}review/${resId}`
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
            url: `${process.env.REACT_APP_CLIENT_URL}review/new`,
            data: { reviewData }
        });
        return dispatch({ type: POST_REVIEW, payload: reviewData });
    } catch (error) {
        return dispatch({ type: "PostReviewError", payload: error });
    }
};