//to combine all the storage units
import { combineReducers } from 'redux';

//import sub storages
import auth from './auth/auth.reducer';
import user from './user/user.reducer';
import restaurant from './restaurant/restaurant.reducer';
import image from './image/image.reducer';

//reducers or storage units
const rootReducer = combineReducers({
    auth, user, restaurant, image
});

export default rootReducer;