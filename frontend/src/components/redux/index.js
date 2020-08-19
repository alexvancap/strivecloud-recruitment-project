import { createStore, combineReducers } from 'redux';
import homeReducer from './reducers/home.reducer';
import mainReducer from './reducers/main.reducer';

const reducers = combineReducers({main: mainReducer, home: homeReducer})

const store = createStore(reducers);

export default store;

