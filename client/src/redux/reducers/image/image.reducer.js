import { GET_IMAGE } from './image.type'

const initialState = {
    images: []
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGE:
            return {
                ...state,
                ...action.payload
            }
            break;

        default:
            return { ...state }
            break;
    }
}

export default imageReducer;