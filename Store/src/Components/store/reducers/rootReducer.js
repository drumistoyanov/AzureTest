import productsReducer from './productReducer.js';
import cartReducer from './cartReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product: productsReducer,
    cart: cartReducer
});

export default rootReducer;