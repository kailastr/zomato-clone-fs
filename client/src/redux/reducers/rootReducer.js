//to combine all the storage units
import { combineReducers } from 'redux';

//import sub storages
import auth from './auth/auth.reducer';
import user from './user/user.reducer';
import restaurant from './restaurant/restaurant.reducer';
import image from './image/image.reducer';
import review from './review/review.reducer';
import food from './food/food.reducer';

//reducers or storage units
const rootReducer = combineReducers({
    auth, user, restaurant, image, review, food
});

export default rootReducer;