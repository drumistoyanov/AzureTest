import React, { Component } from 'react';
import Product from './Product.js';
import { connect } from 'react-redux';
import { addToCart } from "./store/actions/cartActions";


class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            sort: 'name'
        };
    }
    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    updateSort(event) {
        this.setState({ sort: event.target.value });
    }

    addToCart = (product) => {
        this.props.addToCart(product);
    }
    render() {
        let filteredProducts = this.props.products.filter(
            (product) => {
                return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div >

                <div className="container">
                    <div className="filterClass"><input className="abc" type="text" placeholder="Search..." value={this.state.search} onChange={this.updateSearch.bind(this)} />
                        <select className="abc" onChange={this.updateSort.bind(this)}>
                            <option value="name">Name ascending</option>
                            <option value="-name">Name descending</option>
                            <option value="price">Price ascending</option>
                            <option value="-price">Price descending</option>
                        </select>
                    </div>
                    <br />
                    <div className="productList">

                        {this.props.type !== '' ? (
                            filteredProducts.sort(dynamicSort(this.state.sort)).filter(p => p.producttypeid == this.props.type).map(product =>
                                <Product product={product} addToCart={this.addToCart}
                                    inCart={this.props.cart.length > 0 &&
                                        this.props.cart.filter(e => e.product.id === product.id).length > 0}
                                    key={product.id} />)) : (filteredProducts.sort(dynamicSort(this.state.sort)).map(product =>
                                        <Product product={product} addToCart={this.addToCart}
                                            inCart={this.props.cart.length > 0 &&
                                                this.props.cart.filter(e => e.product.id === product.id).length > 0}
                                            key={product.id} />))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

const mapStateToProps = (state) => {

    return {
        products: state.product.products,
        cart: state.cart.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)