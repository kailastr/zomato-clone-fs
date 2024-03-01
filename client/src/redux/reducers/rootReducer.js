//to combine all the storage units
import { combineReducers } from 'redux';

//import sub storages
import auth from './auth/auth.reducer';

//reducers or storage units
const rootReducer = combineReducers({
    auth
});

export default rootReducer;