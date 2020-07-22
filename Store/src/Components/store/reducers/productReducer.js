//import { deserializeJSON } from "../../../sereliazeDeserializeJSON";
import axios from 'axios';
import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions/productActions';
// axios.get('https://192.168.21.149:3000/products')
// .then(response => {
//   const productsFromApi = response.data;
//   console.log(1);
//   initialState = {

//     products: productsFromApi
//   };
// }).catch(err => {
//   console.log(err);
// })
const initialState = {
  pending: false,
  products: [],
  error: null
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;






// import { deserializeJSON } from "../../../sereliazeDeserializeJSON.ts";

// const initialState = {
//     products: deserializeJSON()
//   };
// const productReducer = (state = initialState,action) => { 
//     return state;
// };

// export default productReducer;


