import { createStore, combineReducers } from 'redux';
import homeReducer from './reducers/home.reducer';
import mainReducer from './reducers/main.reducer';
import authReducer from './reducers/auth.reducer';
import profileReducer from './reducers/profile.reducer';
import searchReducer from './reducers/search.reducer';

const reducers = combineReducers({
  auth: authReducer, 
  main: mainReducer, 
  home: homeReducer, 
  profile: profileReducer,
  search: searchReducer
});

const store = createStore(reducers);

export default store;

