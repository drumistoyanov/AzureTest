import React, { Component } from 'react';


class Product extends Component
{
    state = {
    inCart: this.props.inCart
  };

  addToCart = (e) => {

    e.preventDefault();

    this.props.addToCart(this.props.product)

    this.setState({
      inCart: true
    })
  }

  render() {

    const { product } = this.props;

    return (
      <div className="productItem">
        <figure className="card card-product">
          <div className="img-wrap">
            <img  src={process.env.PUBLIC_URL + product.image} alt='' />
          </div>
          <figcaption className="info-wrap">
            <h4 className="title">{product.name}</h4>
            
            <div className="price-wrap h5">
              <span className="price-new">${product.price.toFixed(2)}</span>
            </div>
          </figcaption>
          <div className="bottom-wrap">

            {
              this.state.inCart ? (
                <span className="btn btn-success">Added to cart</span>
              ) : (
                  <button onClick={this.addToCart} className="btn btn-primary float-right">Add to cart</button>
                )
            }

          </div>
        </figure>
      </div>
    )
  }
}

export default Product;