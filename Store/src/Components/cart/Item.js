import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCartQuantity, removeFromCart } from '../store/actions/cartActions';
class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.item.quantity,
            btnVisible: false
        };
    }

    handleChange = (e) => {

        if (e.target.value <= 0) {
            alert("Quantity must be greater than or equal to 1");

            return;
        }

        if (e.target.value > this.props.item.product.quantity) {
            alert("You have exceeded the available items of this product!");

            return;
        }

        if (this.state.quantity !== e.target.value) {
            this.setState({
                quantity: e.target.value,
                btnVisible: true
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.updateCartQuantity(this.props.item.product.id, this.state.quantity);

        this.setState({
            btnVisible: false
        });
    }

    handleRemove = (e) => {
        this.props.removeFromCart(this.props.item.product.id);
    }

    render() {

        const { item } = this.props;

        return (

            <div className="row">
                <div className="col-xs-2"><img src={process.env.PUBLIC_URL + item.product.image} alt='' />
                </div>



                <form onSubmit={this.handleSubmit}>
                    <h4 ><strong>{item.product.name}</strong></h4>
                    <div className="d-flex justify-content-between">
                        <input className="text-right" type="number" onChange={this.handleChange} value={this.state.quantity} />

                        <h5><strong> <span className="text-muted">x</span> {item.product.price} </strong></h5>
                    </div>

                    {
                        this.state.btnVisible ? (
                            <button type="submit" className="btn btn-info">Update</button>

                        ) : null
                    }

                    <button type="button" onClick={this.handleRemove} className="btn btn-link btn-xs">
                        <span><i className="fa fa-trash"></i></span>
                    </button>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        updateCartQuantity: (productId, quantity) => dispatch(updateCartQuantity(productId, quantity)),
        removeFromCart: (productId) => dispatch(removeFromCart(productId))
    }
};

export default connect(null, mapDispatchToProps)(Item);