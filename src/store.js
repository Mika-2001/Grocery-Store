import { createStore, combineReducers } from 'redux';
import cartReducer from './components/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});


const store = createStore(rootReducer);

export default store;
