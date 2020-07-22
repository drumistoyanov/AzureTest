import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from '../actions/productActions';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('http://192.168.21.149:3000/products')
            .then((response) => {
                
                console.log(response)
                return response.json();
            })
            .then((data) => {
                console.log(data)
                if (data.error) {
                    throw (data.error);
                }
                dispatch(fetchProductsSuccess(data))
                return data;
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            })
    }
}

export default fetchProducts;