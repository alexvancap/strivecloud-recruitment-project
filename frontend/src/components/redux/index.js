import { createStore, combineReducers } from 'redux';
import homeReducer from './reducers/home.reducer';
import mainReducer from './reducers/main.reducer';
import authReducer from './reducers/auth.reducer';
import profileReducer from './reducers/profile.reducer';

const reducers = combineReducers({auth: authReducer, main: mainReducer, home: homeReducer, profile: profileReducer});

const store = createStore(reducers);

export default store;

