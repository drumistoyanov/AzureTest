import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.handleBuy = this.handleBuy.bind(this);
    }
    handleBuy(event) {
        let total = 0;

        this.props.cart.map(item => total += item.product.price * item.quantity);
        event.preventDefault();
        fetch('http://192.168.21.149:3000/sell', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "products": this.props.cart,
                "price": total
            })
        })
        .then(window.location.reload())
    }
    render() {

        let total = 0;

        this.props.cart.map(item => total += item.product.price * item.quantity);

        const cart = this.props.cart.length > 0 ? (
            <div>
                <div className="panel-body">
                    {
                        this.props.cart.map(item => {
                            return (
                                <div key={item.product.id}>
                                    <Item item={item} />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>

                <div >
                    <div className="panel-body">
                        <div className="col-xs-11">
                            <button className="btn btn-primary pull-right" type='submit' onClick={this.handleBuy} >Buy</button>
                            <h4 className="text-right">Total <strong>${total.toFixed(2)}</strong></h4>
                        </div>
                    </div>
                </div>
            </div>

        ) : (
                <div className="panel-body">
                    <p>Cart is empty</p>
                </div>
            )
        return (

            <div className="container">
                <br></br>
                <div className="col-md-12 col-xs-12">
                    <div className="panel-heading">
                        <div className="panel-title">
                            <div className="col-xs-6">
                                <h5><span className="fa fa-shopping-cart"></span> My Shopping Cart</h5>
                                <br></br>
                            </div>

                        </div>
                    </div>

                    {cart}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart
    }
};

export default connect(mapStateToProps)(Cart);