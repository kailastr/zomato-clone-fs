//to combine all the storage units
import { combineReducers } from 'redux';

//import sub storages
import auth from './auth/auth.reducer';
import user from './user/user.reducer';

//reducers or storage units
const rootReducer = combineReducers({
    auth, user
});

export default rootReducer;